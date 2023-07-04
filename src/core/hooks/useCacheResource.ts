'use client'
import { User } from "@/core/models/user.model";
import * as React from "react";
import userService from "../services/user.service";
import { useCookies } from "react-cookie";
import { getSession } from "next-auth/react";
import apiClient from "../services/api-client";

export default function useCachedResources() {
  const [cookie, removeCookie] = useCookies([`next-auth.session-token`]);
  const [isLoadingComplete, setLoadingComplete] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<User>();

  // Load any resources or data that we need prior to rendering the app

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const session = await getSession()

        const authToken = session?.user.accessToken

        if (authToken) {
          apiClient.addAsyncRequestTransform(async (request: any) => {
            request.headers['Authorization'] = `Bearer ${authToken}`;
          });

          const userProfile = await userService.getCurrentUserProfile();
          if (userProfile) setUser(userProfile);

        }
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [getSession]);

  return { isLoadingComplete, user, setUser };
}