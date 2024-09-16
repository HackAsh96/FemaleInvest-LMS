import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CommunityRepo } from "../core/requirements/CommunityRepo";
import { CourseRepo } from "../core/requirements/CourseRepo";
export declare class MockRepos {
    bookmarks: BookmarkRepo;
    courses: CourseRepo;
    communityPosts: CommunityRepo;
    constructor();
}
