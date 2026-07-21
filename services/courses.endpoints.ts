import { api } from "@/lib/axios";
import { Category, Course, CourseProgressResponse, CourseResponse, EnrolledCourse, EnrolledCourseGroupsResponse, FeaturedCourseResponse, Lesson, LessonResponse } from "../types/course.definations";
import { AxiosInstance } from "axios";

const COURSE_URL = "/courses/";
const ENROLLMENT_URL = "/enrollments/";

//get courses
export const getCourses = async (page: number = 1): Promise<CourseResponse> => {
    const response = await api.get<CourseResponse>(`${COURSE_URL}`, {
        params: { page }
    })
    return response.data
}

//get coursedetails
export const getCoursesDetails = async (slug: string): Promise<Course> => {
    const response = await api.get<Course>(`${COURSE_URL}${slug}/`)
    return response.data
}

//get list of lessons
export const getCourseLessons = async (page: number = 1, slug: string): Promise<LessonResponse> => {
    const response = await api.get<LessonResponse>(`${COURSE_URL}${slug}/lessons/`, {
        params: { page }
    });
    return response.data
}

//get lesson details
export const getLessonDetails = async (slug: string, id: number): Promise<Lesson> => {
    const response = await api.get<Lesson>(`${COURSE_URL}${slug}/lessons/${id}/`)
    return response.data
}

//mark lesson complete
export const markComplete = async (slug: string, id: number) => {
    const response = await api.post(`${COURSE_URL}${slug}/lessons/${id}/complete/`)
    return response.data
}

//go next lesson
export const goNext = async (slug: string, id: number): Promise<Lesson> => {
    const { data } = await api.get(
        `/courses/${slug}/lessons/${id}/next/`
    );

    return data
}

//go previous lesson
export const goPrevious = async (slug: string, id: number): Promise<Lesson> => {
    const { data } = await api.get(
        `/courses/${slug}/lessons/${id}/previous/`
    );

    return data
}

//get course progress
export const getCourseProgress = async (
    slug: string
): Promise<CourseProgressResponse> => {
    const { data } = await api.get(
        `/courses/${slug}/progress/`
    );

    return data;
};

//get course category
export const getCoursesCategories = async (): Promise<Category> => {
    const response = await api.get<Category>(`${COURSE_URL}categories/`)
    return response.data
}


//list featured course
export const getFeaturedCourses = async (page: number = 1): Promise<FeaturedCourseResponse> => {
    const response = await api.get<FeaturedCourseResponse>(`${COURSE_URL}featured/`, {
        params: { page }
    })
    return response.data
}


//list erollment
export const getMyEnrollments = async (page: number = 1, apiInstance: AxiosInstance = api): Promise<EnrolledCourseGroupsResponse> => {
    const response = await apiInstance.get<EnrolledCourseGroupsResponse>(`${ENROLLMENT_URL}`, {
        params: { page }
    });
    return response.data
}

//get enrollment details
export const getMyEnrollmentDetails = async (page: number = 1, id: string): Promise<EnrolledCourse> => {
    const response = await api.get<EnrolledCourse>(`${ENROLLMENT_URL}${id}/`, {
        params: { page }
    });
    return response.data
}