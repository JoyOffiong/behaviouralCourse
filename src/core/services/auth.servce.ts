import { RegisterModel } from '../models/register.model';
import apiClient from './api-client';

const ENDPOINT = '/api/Auth';

const login = async (dto: any) => {
  return await apiClient.post(`${ENDPOINT}/login`, dto);
};

const register = (registerData: RegisterModel) => {
  return apiClient.post(`${ENDPOINT}/register`, registerData);
};

const activateRegistration = (dto: any) => {
  return apiClient.post(`${ENDPOINT}/activate-reg`, dto);
};

const resendActivationCode = (email: string) => {
  return apiClient.post(`${ENDPOINT}/resend-activation-code`, { email });
};


const forgotPassword = (email: string) => {
  return apiClient.post(`${ENDPOINT}/forgot-password`, {
    email,
  });
};

const createPassword = (dto: any) => {
  return apiClient.post(`${ENDPOINT}/create-password`, dto);
};

const resetPassword = (dto: any) => {
  return apiClient.post(`${ENDPOINT}/reset-password`, dto);
};


const authService = {
  login,
  register,
  activateRegistration,
  createPassword,
  resendActivationCode,
  forgotPassword,
  resetPassword
};
export default authService
