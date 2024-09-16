import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CourseBookmark } from "../core/entities/CourseBookmark";

export class MockBookmarkRepo implements BookmarkRepo {
  bookmarks: CourseBookmark[] = [];
  constructor(initialCourseBookmarks:CourseBookmark[]) {
    this.bookmarks = initialCourseBookmarks
  }

  async listBookmarkByUserId(userId: string): Promise<CourseBookmark[]> {
    const bookmarks = this.bookmarks.filter(
      (bookmark) => bookmark.userId === userId
    );
    return bookmarks;
  }
}
