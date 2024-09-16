import {CommunityPost} from '@core/entities/CommunityPost';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type CommunityState = {
  communityPosts: CommunityPost[];
  page: number;
};

const initialState: CommunityState = {
  communityPosts: [],
  page: 1,
};

const CommunitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    setCommunityPosts: (
      state,
      action: PayloadAction<{communityPosts: CommunityPost[]; page: number}>,
    ) => {
        const simpleIdGenerator = () => Math.random().toString(36).slice(2, 11);
      if (action.payload.page === 1) {
        state.communityPosts = action.payload.communityPosts;
      } else {
    const updatedPosts:CommunityPost[] = action.payload.communityPosts.map((post) => ({...post, id:`post-${simpleIdGenerator()}`,isLiked:false}));
      state.communityPosts = [...state.communityPosts, ...updatedPosts];
      }
    },
    likePost: (state, action: PayloadAction<string>) => {
      const postId = action.payload;
      /**
       * Manipulate the state to update the post with the given id to be liked or unliked
       */
      const post = state.communityPosts.find(post => post.id === postId);
      if (post) {
        post.isLiked = !post.isLiked; // Toggle like status
      }
    },
  },
});

export const {setCommunityPosts, likePost} =
  CommunitySlice.actions;
export const CommunityReducer = CommunitySlice.reducer;