import { BookmarkRepo } from "../../requirements/BookmarkRepo";

export class ListCourseBookmarksUsecase {
  constructor(private bookmarkRepo: BookmarkRepo) {}

  exec = async (userId: string) => {
    return await this.bookmarkRepo.listBookmarkByUserId(userId);
  };
}
