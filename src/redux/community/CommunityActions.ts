import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { RootStoreState } from "../types";
import { getCommunityPosts } from "../../services/api/community/getCommunityPosts";
import { likePost, setCommunityPosts } from "./CommunityReducer";

export const getPostsList = (page:number) => {
    return async (
        dispatch: ThunkDispatch<RootStoreState,void,Action>,
    )=>{
        try{
            /**
             * Fetch data from the API and handle undefined case by empty array
             */
            const communityPosts = await getCommunityPosts() ?? []
            
                dispatch(setCommunityPosts({communityPosts,page}))
            
        }
        catch(error){
            /**
             * This should probably be handled by an error handler 
             * that would show the user a message on a UI or a notification
             * due to time and lack of resources we will handle the promise by returning empty [] 
             */
            new Error(`Error fetching community posts: ${error}`);
        }
    }
}
export const toggleLikePost = (postId: string) => {
    return (dispatch: ThunkDispatch<RootStoreState, void, Action>) => {
        dispatch(likePost(postId));
    }
}