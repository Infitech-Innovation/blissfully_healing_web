import { useQuery } from "@tanstack/react-query"
import { getCourses, getCoursesDetails, getFeaturedCourses, getMyEnrollmentDetails, getMyEnrollments } from "./courses.endpoints"
import { Course, EnrolledCourse } from "./definations"

export const coursekeys = {
    all: ["courses"] as const,
    detail: (slug: string) => [...coursekeys.all, slug] as const,
    enrolled: ["enrolled-courses"] as const,
    enrolleddetails: (id: string) => [...coursekeys.enrolled, id] as const,
    progress: (slug: string) => [...coursekeys.enrolled, slug] as const,
}


// Courses 
export const useGetCourses = () => {
    return useQuery<Course[]>({
        queryKey: coursekeys.all,
        queryFn: () => getCourses(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

export const useCourseDetails = (slug: string) => {
    return useQuery({
        queryKey: coursekeys.detail(slug),
        queryFn: () => getCoursesDetails(slug),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug,
    })
}

export const useGetFeaturedCourses = () => {
    return useQuery<Course[]>({
        queryKey: coursekeys.all,
        queryFn: () => getFeaturedCourses(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}



// Enrollments
export const useEnrolledCourses = () => {
    return useQuery<EnrolledCourse[]>({
        queryKey: coursekeys.enrolled,
        queryFn: () => getMyEnrollments(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

export const useEnrolledCoursesDetails = (id: string) => {
    return useQuery({
        queryKey: coursekeys.enrolleddetails(id),
        queryFn: () => getMyEnrollmentDetails(id),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!id,
    })
}

