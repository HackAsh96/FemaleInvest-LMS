import { CourseBookmark } from "@core/entities/CourseBookmark"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type BookmarksState = {
    courseBookmarks: CourseBookmark[]
}

const initialState:BookmarksState = {
    courseBookmarks: []
}

const CourseBookmarksSlice = createSlice({
    name: 'bookmarks',
    initialState,
    reducers: {
        setCoursesBookmarks: (state, action:PayloadAction<CourseBookmark[]>) => {
            state.courseBookmarks = action.payload
        }
    }
})

export const {setCoursesBookmarks } = CourseBookmarksSlice.actions
export const BookmarksReducer = CourseBookmarksSlice.reducer