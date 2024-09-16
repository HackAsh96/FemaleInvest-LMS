import { CommunityRepo } from "../../requirements/CommunityRepo";

export class ListCommunityPostsUsecase {
  constructor(private communityRepo: CommunityRepo) {}

  exec = async () => {
    return await this.communityRepo.listCommunityPosts();
  };
}
