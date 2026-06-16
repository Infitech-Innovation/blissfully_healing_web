import { useQuery } from "@tanstack/react-query"
import { getCourses, getCoursesDetails, getFeaturedCourses } from "./courses.endpoints"
import { Course } from "./definations"

export const coursekeys = {
    all: ["courses"] as const,
    detail: (slug: string) => [...coursekeys.all, slug] as const,
}

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

