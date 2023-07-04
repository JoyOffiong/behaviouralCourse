import { create } from 'apisauce';

const apiClient = create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
});

apiClient.addAsyncResponseTransform(async (response: any) => {
  if (response.problem === 'NETWORK_ERROR' || response.problem === 'CONNECTION_ERROR' || response.problem === 'TIMEOUT_ERROR') {
    // show no internet alert
  }
});

export default apiClient;
