import apiClient from '@/core/services/api-client';
import Course from '../models/course.model';

const ENDPOINT = '/api/Course';

const getCourses = async (token: string): Promise<Course[]> => {
  apiClient.addAsyncRequestTransform(async (request: any) => {
    request.headers['Authorization'] = `Bearer ${token}`;
  });

  const { ok, data }: any = await apiClient.get(`${ENDPOINT}/getCourses`);

  let items: Course[] = [];
  if (ok && data.success) {
    items = data?.data?.map((x: any) => new Course(x));
  }
  return items;
};

const getCourseDetails = async (courseId: string, token: string) => {
  apiClient.addAsyncRequestTransform(async (request: any) => {
    request.headers['Authorization'] = `Bearer ${token}`;
  });

  const { ok, data }: any = await apiClient.get(`${ENDPOINT}/${courseId}/details`);
  if (ok && data) return new Course(data.data);
  else return new Course(null);
}

const courseService = {
  getCourses,
  getCourseDetails
};

export default courseService
