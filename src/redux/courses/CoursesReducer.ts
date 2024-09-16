import { Course } from "@core/entities/Course"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type CoursesState = {
    courses: Course[]
}

const initialState:CoursesState = {
    courses: []
}

const CoursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses: (state, action:PayloadAction<Course[]>) => {
            state.courses = action.payload
        }
    }
})

export const { setCourses } = CoursesSlice.actions
export const CoursesReducer = CoursesSlice.reducer