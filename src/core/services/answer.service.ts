import apiClient from '@/core/services/api-client';

const ENDPOINT = '/api/Answer';

const saveAnswer = async (dto: any, token: string) => {
  apiClient.addAsyncRequestTransform(async (request: any) => {
    request.headers['Authorization'] = `Bearer ${token}`;
  });

  return apiClient.post(`${ENDPOINT}/saveAnswer`, dto);
};

const answerService = {
  saveAnswer,
};

export default answerService
