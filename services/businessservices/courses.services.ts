import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
    getCourseLessons,
    getCourseProgress,
    getCourses,
    getCoursesCategories,
    getCoursesDetails,
    getFeaturedCourses,
    getLessonDetails,
    getMyEnrollmentDetails,
    getMyEnrollments,
    goNext,
    goPrevious,
    markComplete,
} from "../endpoints/courses.endpoints"
import {
    Category,
    Course,
    CourseProgressResponse,
    CourseResponse,
    EnrolledCourse,
    EnrolledCourseGroupsResponse,
    FeaturedCourseResponse,
    Lesson,
    LessonResponse,
} from "../../types/course.definations"

// Centralized React Query keys keep course cache reads and invalidations consistent.
export const coursekeys = {
    all: ["courses"] as const,
    list: (page: number) => [...coursekeys.all, "list", page] as const,
    featured: (page: number) => [...coursekeys.all, "featured", page] as const,
    categories: () => [...coursekeys.all, "categories"] as const,
    detail: (slug: string) => [...coursekeys.all, slug] as const,
    lessons: (slug: string, page: number) => [...coursekeys.detail(slug), "lessons", page] as const,
    lesson: (slug: string, id: number) => [...coursekeys.detail(slug), "lessons", id] as const,
    nextLesson: (slug: string, id: number) => [...coursekeys.lesson(slug, id), "next"] as const,
    previousLesson: (slug: string, id: number) => [...coursekeys.lesson(slug, id), "previous"] as const,
    progress: (slug: string) => [...coursekeys.detail(slug), "progress"] as const,
    enrolled: ["enrolled-courses"] as const,
    enrolledList: (page: number) => [...coursekeys.enrolled, "list", page] as const,
    enrolleddetails: (id: string) => [...coursekeys.enrolled, id] as const,
}


// Courses

// Fetches the public paginated course catalog.
export const useGetCourses = (page = 1) => {
    return useQuery<CourseResponse>({
        queryKey: coursekeys.list(page),
        queryFn: () => getCourses(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

// Fetches public detail data for a single course by slug.
export const useCourseDetails = (slug: string) => {
    return useQuery<Course>({
        queryKey: coursekeys.detail(slug),
        queryFn: () => getCoursesDetails(slug),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug,
    })
}

// Fetches the featured course carousel/list for public course pages.
export const useGetFeaturedCourses = (page = 1) => {
    return useQuery<FeaturedCourseResponse>({
        queryKey: coursekeys.featured(page),
        queryFn: () => getFeaturedCourses(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

// Fetches available course categories for filters and course metadata.
export const useCourseCategories = () => {
    return useQuery<Category>({
        queryKey: coursekeys.categories(),
        queryFn: getCoursesCategories,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

// Fetches the paginated lesson list for a course curriculum.
export const useCourseLessons = (slug: string, page = 1) => {
    return useQuery<LessonResponse>({
        queryKey: coursekeys.lessons(slug, page),
        queryFn: () => getCourseLessons(page, slug),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug,
    })
}

// Fetches one lesson, including its lesson blocks/content payload.
export const useLessonDetails = (slug: string, id: number) => {
    return useQuery<Lesson>({
        queryKey: coursekeys.lesson(slug, id),
        queryFn: () => getLessonDetails(slug, id),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug && !!id,
    })
}

// Fetches the next lesson relative to the current lesson.
export const useNextLesson = (slug: string, id: number) => {
    return useQuery<Lesson>({
        queryKey: coursekeys.nextLesson(slug, id),
        queryFn: () => goNext(slug, id),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug && !!id,
    })
}

// Fetches the previous lesson relative to the current lesson.
export const usePreviousLesson = (slug: string, id: number) => {
    return useQuery<Lesson>({
        queryKey: coursekeys.previousLesson(slug, id),
        queryFn: () => goPrevious(slug, id),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug && !!id,
    })
}

// Fetches completion progress for the logged-in user in a course.
export const useCourseProgress = (slug: string) => {
    return useQuery<CourseProgressResponse>({
        queryKey: coursekeys.progress(slug),
        queryFn: () => getCourseProgress(slug),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!slug,
    })
}

// Marks a lesson complete and refreshes progress, lesson, and enrollment caches.
export const useMarkLessonComplete = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: ({ slug, id }: { slug: string; id: number }) => markComplete(slug, id),
        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({
                queryKey: coursekeys.progress(variables.slug),
            })

            queryClient.invalidateQueries({
                queryKey: coursekeys.lessons(variables.slug, 1),
            })

            queryClient.invalidateQueries({
                queryKey: coursekeys.lesson(variables.slug, variables.id),
            })

            queryClient.invalidateQueries({
                queryKey: coursekeys.enrolled,
            })
        },
    })
}



// Enrollments

// Fetches the logged-in user's paginated course enrollments.
export const useEnrolledCourses = (page = 1) => {
    return useQuery<EnrolledCourseGroupsResponse>({
        queryKey: coursekeys.enrolledList(page),
        queryFn: () => getMyEnrollments(page),
        placeholderData: (previousData) => previousData,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })
}

// Fetches one enrolled course record, including progress and completed lessons.
export const useEnrolledCoursesDetails = (id: string) => {
    return useQuery<EnrolledCourse>({
        queryKey: coursekeys.enrolleddetails(id),
        queryFn: () => getMyEnrollmentDetails(1, id),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        enabled: !!id,
    })
}
