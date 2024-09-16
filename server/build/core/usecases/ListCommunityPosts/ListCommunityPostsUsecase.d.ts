import { CommunityRepo } from "../../requirements/CommunityRepo";
export declare class ListCommunityPostsUsecase {
    private communityRepo;
    constructor(communityRepo: CommunityRepo);
    exec: () => Promise<import("../../entities/CommunityPost").CommunityPost[]>;
}
