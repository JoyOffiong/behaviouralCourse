import { useContext } from 'react';
import GlobalContext from '@/core/context/global-context';
import userService from '@/core/services/user.service';
import apiClient from '../services/api-client';

const useGlobalData = () => {
  const { user, setUser }: any = useContext(GlobalContext);

  const loadUserProfile = async (token: string) => {
    apiClient.addAsyncRequestTransform(async (request: any) => {
      request.headers['Authorization'] = `Bearer ${token}`;
    });

    const userProfile = await userService.getCurrentUserProfile();
    if (userProfile) setUser(userProfile);
  };

  return { user, setUser, loadUserProfile };
};

export default useGlobalData