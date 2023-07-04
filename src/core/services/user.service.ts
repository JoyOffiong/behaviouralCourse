import apiClient from '@/core/services/api-client';
import { User } from '@/core/models/user.model';
const ENDPOINT = '/api/User';

const getCurrentUserProfile = async (): Promise<User> => {
  const { ok, data }: any = await apiClient.get(`${ENDPOINT}/userProfile`);
  if (ok && data) return new User(data.data);
  else return new User(null);
};

const completeLesson = async (dto: any, token: string) => {
  apiClient.addAsyncRequestTransform(async (request: any) => {
    request.headers['Authorization'] = `Bearer ${token}`;
  });

  return apiClient.post(`${ENDPOINT}/completeLesson`, dto);
};

const userService = {
  getCurrentUserProfile,
  completeLesson
};

export default userService
