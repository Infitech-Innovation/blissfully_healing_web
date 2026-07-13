import { useQuery } from "@tanstack/react-query"
import { getCourses, getCoursesDetails, getFeaturedCourses, getMyEnrollmentDetails, getMyEnrollments } from "../endpoints/courses.endpoints"
import { Course, CourseResponse, EnrolledCourse, EnrolledCourseGroupsResponse, FeaturedCourseResponse } from "../../types/course.definations"

export const coursekeys = {
    all: ["courses"] as const,
    list: (page: number) => [...coursekeys.all, "list", page] as const,
    featured: (page: number) => [...coursekeys.all, "featured", page] as const,
    detail: (slug: string) => [...coursekeys.all, slug] as const,
    enrolled: ["enrolled-courses"] as const,
    enrolledList: (page: number) => [...coursekeys.enrolled, "list", page] as const,
    enrolleddetails: (id: string) => [...coursekeys.enrolled, id] as const,
    progress: (slug: string) => [...coursekeys.enrolled, slug] as const,
}


// Courses 
export const useGetCourses = (page = 1) => {
    return useQuery<CourseResponse>({
        queryKey: coursekeys.list(page),
        queryFn: () => getCourses(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

export const useCourseDetails = (slug: string) => {
    return useQuery<Course>({
        queryKey: coursekeys.detail(slug),
        queryFn: () => getCoursesDetails(slug),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug,
    })
}

export const useGetFeaturedCourses = (page = 1) => {
    return useQuery<FeaturedCourseResponse>({
        queryKey: coursekeys.featured(page),
        queryFn: () => getFeaturedCourses(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}



// Enrollments
export const useEnrolledCourses = (page = 1) => {
    return useQuery<EnrolledCourseGroupsResponse>({
        queryKey: coursekeys.enrolledList(page),
        queryFn: () => getMyEnrollments(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

export const useEnrolledCoursesDetails = (id: string) => {
    return useQuery<EnrolledCourse>({
        queryKey: coursekeys.enrolleddetails(id),
        queryFn: () => getMyEnrollmentDetails(1, id),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!id,
    })
}
