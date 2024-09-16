import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CourseBookmark } from "../core/entities/CourseBookmark";
export declare class MockBookmarkRepo implements BookmarkRepo {
    bookmarks: CourseBookmark[];
    constructor(initialCourseBookmarks: CourseBookmark[]);
    listBookmarkByUserId(userId: string): Promise<CourseBookmark[]>;
}
