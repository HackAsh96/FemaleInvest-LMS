import { type CommunityPost } from "@core/entities/CommunityPost";
import { localhost } from "../utils/domains";

export const getCommunityPosts = async (): Promise<CommunityPost[]|undefined> => {
  try {
    const response = await fetch(`${localhost}/community`);
    /**
     * This promise is used to simulate a delay in the API response
    */
    await new Promise(resolve => setTimeout(resolve, 1500));
    return await response.json()
  } catch (error) {
    new Error(`Error fetching community posts: ${error}`);
  }
};