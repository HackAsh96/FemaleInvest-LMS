import { localhost } from "../utils/domains";
import { type Course } from "@core/entities/Course";

export const getCourses = async (): Promise<Course[]|undefined> => {
  try {
    const response = await fetch(`${localhost}/courses`);
    return await response.json();
  } catch (error) {
    new Error(`Error fetching courses: ${error}`);
  }
};