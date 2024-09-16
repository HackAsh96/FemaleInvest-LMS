import { localhost } from "../utils/domains";
import { type CourseBookmark } from "@core/entities/CourseBookmark";

export const getCourseBookmarks = async (): Promise<CourseBookmark[]|undefined> => {
  try {
    const response = await fetch(`${localhost}/bookmarks`);
    return await response.json();
  } catch (error) {
    new Error(`Error fetching course bookmarks: ${error}`);
  }
};