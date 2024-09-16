import { CommunityPost } from "../entities/CommunityPost";

export interface CommunityRepo {
    listCommunityPosts(): Promise<CommunityPost[]>;
}