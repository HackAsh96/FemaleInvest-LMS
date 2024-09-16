export interface CommunityPost {
  id: string;          // Unique identifier for the post
  author: string;      // Author's name
  content: string;     // The content of the post
  isLiked: boolean;    // Whether the post is liked by the user or not
  timestamp: string;     // A string representing when the post was created
}