import { Action, combineReducers, configureStore, Store, ThunkDispatch } from '@reduxjs/toolkit';
import { CommunityReducer } from './community/CommunityReducer';
import { CoursesReducer } from './courses/CoursesReducer';
import { RootStoreState } from './types';
import { BookmarksReducer } from './coursesBookmark/BookmarksReducer';

const rootReducer = combineReducers({community:CommunityReducer,courses:CoursesReducer,bookmarks:BookmarksReducer})
export const store:Store<RootStoreState,Action> = configureStore({reducer:rootReducer});