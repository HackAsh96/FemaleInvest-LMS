import { CommunityPost } from "../core/entities/CommunityPost";
import { CommunityRepo } from "../core/requirements/CommunityRepo";

export class MockCommunityRepo implements CommunityRepo {
  communityPosts: CommunityPost[] = [];
  constructor(initialCommunityPosts: CommunityPost[]) {
    this.communityPosts = initialCommunityPosts;
  }

  async listCommunityPosts(): Promise<CommunityPost[]> {
    return this.communityPosts;
  }

}
