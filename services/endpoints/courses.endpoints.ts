import { api } from "@/lib/axios";
import { Category, Course, CourseResponse, EnrolledCourse, EnrolledCourseGroupsResponse, FeaturedCourseResponse, LessonResponse } from "../../types/course.definations";
import { AxiosInstance } from "axios";

const COURSE_URL = "/courses/";
const ENROLLMENT_URL = "/enrollments/";

export const getCourses = async (page: number = 1): Promise<CourseResponse> => {
    const response = await api.get<CourseResponse>(`${COURSE_URL}`, {
        params: { page }
    })
    return response.data
}

export const getCoursesDetails = async (slug: string): Promise<Course> => {
    const response = await api.get<Course>(`${COURSE_URL}${slug}`)
    return response.data
}

export const getCoursesCategories = async (): Promise<Category>  => {
    const response = await api.get<Category>(`${COURSE_URL}categories/`)
    return response.data
}

export const getFeaturedCourses = async (page: number = 1): Promise<FeaturedCourseResponse> => {
    const response = await api.get<FeaturedCourseResponse>(`${COURSE_URL}featured/`, {
        params: { page }
    })
    return response.data
}

export const getMyEnrollments = async (page: number = 1, apiInstance: AxiosInstance = api): Promise<EnrolledCourseGroupsResponse> => {
    const response = await apiInstance.get<EnrolledCourseGroupsResponse>(`${ENROLLMENT_URL}`, {
        params: { page }
    });
    return response.data
}

export const getMyEnrollmentDetails = async (page: number = 1, id: string):Promise<EnrolledCourse> => {
    const response = await api.get<EnrolledCourse>(`${ENROLLMENT_URL}${id}`, {
        params: { page }
    });
    return response.data
}


export const getCourseLessons = async (page: number = 1, slug: string):Promise<LessonResponse> => {
    const response = await api.get<LessonResponse>(`${COURSE_URL}${slug}/lessons/`, {
        params: { page }
    });
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
