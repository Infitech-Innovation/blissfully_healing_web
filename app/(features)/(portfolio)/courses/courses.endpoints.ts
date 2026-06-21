import { api } from "@/lib/axios";
import { Course, EnrolledCourse} from "./definations";
import { AxiosInstance } from "axios";

const COURSE_URL = "/courses/";
const ENROLLMENT_URL = "/enrollments/";

export const getCourses = async (): Promise<Course[]> => {
    const response = await api.get(`${COURSE_URL}`)
    return response.data
}

export const getCoursesDetails = async (slug: string) => {
    const response = await api.get(`${COURSE_URL}${slug}`)
    return response.data
}

export const getCoursesCategories = async () => {
    const response = await api.get(`${COURSE_URL}categories/`)
    return response.data
}

export const getFeaturedCourses = async (): Promise<Course[]> => {
    const response = await api.get(`${COURSE_URL}featured/`)
    return response.data
}

export const getMyEnrollments = async (apiInstance: AxiosInstance = api): Promise<EnrolledCourse[]> => {
    const response = await apiInstance.get(`${ENROLLMENT_URL}`);
    return response.data
}

export const getMyEnrollmentDetails = async (id: string) => {
    const response = await api.get<EnrolledCourse>(`${ENROLLMENT_URL}${id}`);
    return response.data
}

// interface CompleteLessonPayload {
//   completed: boolean;
//   score?: number;
// }

// export const markCompleteLesson = async ({
//   slug,
//   id,
//   data,
// }: {
//   slug: string;
//   id: number;
//   data: CompleteLessonPayload;
// }) => {
//   const response = await api.post(
//     `/courses/${slug}/lessons/${id}/complete/`,
//     data
//   );

//   return response.data;
// };