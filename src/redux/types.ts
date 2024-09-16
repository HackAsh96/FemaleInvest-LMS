import { BookmarksState } from "./coursesBookmark/BookmarksReducer";
import { CoursesState } from "./courses/CoursesReducer";
import { CommunityState } from "./community/CommunityReducer";

export interface RootStoreState {
    readonly community: CommunityState;
    readonly courses: CoursesState;
    readonly bookmarks: BookmarksState;
}