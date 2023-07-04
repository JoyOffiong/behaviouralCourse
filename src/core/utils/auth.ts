import { User } from "../models/user.model";
import userService from "../services/user.service"

export const getAuthUser = async (): Promise<User> => {
  // load user
  const userProfile = await userService.getCurrentUserProfile();
  if (userProfile) {
    return userProfile
  }
  else return new User(null);
};

export const getAuthTokenKey = () => {
  const tokenKey = process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY

  if (!tokenKey || tokenKey.length === 0) throw new Error('The environment variable NEXT_PUBLIC_AUTH_TOKEN_KEY is not set')
  return tokenKey
}

export const verifyUser = async (token: string | null) => {
  try {
    if (token) {
      const userProfile = await userService.getCurrentUserProfile();
      if (userProfile) return userProfile
    }
  } catch (err) {
    throw new Error('Your session has expired')
  }
}