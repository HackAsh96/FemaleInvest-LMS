import { CommunityPost } from "../core/entities/CommunityPost";
import { CommunityRepo } from "../core/requirements/CommunityRepo";
export declare class MockCommunityRepo implements CommunityRepo {
    communityPosts: CommunityPost[];
    constructor(initialCommunityPosts: CommunityPost[]);
    listCommunityPosts(): Promise<CommunityPost[]>;
}
