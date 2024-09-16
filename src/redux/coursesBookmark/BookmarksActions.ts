import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootStoreState } from "../types";
import { setCoursesBookmarks } from "./BookmarksReducer";
import { getCourseBookmarks } from "../../services/api/courseBookmarks/getCourseBookmarks";

export const getBookmarksList = () => {
    return async (
        dispatch: ThunkDispatch<RootStoreState,void,Action>,
    )=>{
        try{
            /**
             * Fetch data from the API and handle undefined case by empty array
             */
            const courseBookmarks = await getCourseBookmarks() ?? []
            dispatch(setCoursesBookmarks(courseBookmarks))
        }
        catch(error){
            /**
             * This should probably be handled by an error handler 
             * that would show the user a message on a UI or a notification
             * due to time and lack of resources we will handle the promise by returning empty [] 
             */
            new Error(`Error fetching bookmarks: ${error}`);
        }
    }
}