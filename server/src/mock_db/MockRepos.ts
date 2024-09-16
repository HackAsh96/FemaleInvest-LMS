import { BookmarkRepo } from "../core/requirements/BookmarkRepo";
import { CommunityRepo } from "../core/requirements/CommunityRepo";
import { CourseRepo } from "../core/requirements/CourseRepo";
import { MockBookmarkRepo } from "./MockBookmarkRepo";
import { MockCommunityRepo } from "./MockCommunityRepo";
import { MockCourseRepo } from "./MockCourseRepo";
import { randImg } from "@ngneat/falso";

const getRandomName = () => {
  const names = [
    'Amanda Brogaard', 'Ivona Colic', 'Mads Willumsen', 'Paolo Scanferla',
    'Sophia Jensen', 'Lucas Hansen', 'Emma Olsen', 'Oliver Nielsen',
    'Ella Sørensen', 'Oscar Madsen', 'Anna Kristensen', 'William Petersen'
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex] as string;
};

const getRandomContent = () => {
  const contents = [
    'Hey everyone! I\'m new here 😄 Can someone help me get started investing?',
    'I just bought my first stock! Yay!',
    'Can anyone recommend a good trading platform for beginners?',
    'I just earned my first 1000 DKK from investing! 🎉',
    'What are some good stocks to invest in for long-term growth?',
    'How do dividends work? Can someone explain?',
    'I\'m planning to start a new investment portfolio, any tips?',
    'Just sold my first stock! Feeling great! 💪',
    'Does anyone have experience with crypto investing?',
    'Is it too late to invest in real estate?',
  ];
  
  const randomIndex = Math.floor(Math.random() * contents.length);
  return contents[randomIndex] as string
};

const initialCommunityPosts = Array.from({ length: 10 }, (_, index) => ({
        id: `post-${index}`,
        author: getRandomName(),
        content: getRandomContent(),
        isLiked: false,
        timestamp: `${Math.floor(Math.random() * 60)} minutes ago`,
      }));
    
const initialCourseBookmarks =Array.from({ length: 4 }, (_, index) => ({
  userId:"userId",
  courseId:`courseId${index}`
}))

const initialCourses = [
  {
    id: "courseId0",
    name: "Personal Finance",
    description: "Learn how to manage your personal finance",
    lessons: [
      {
        id: "courseId0_lessonId0",
        name: "Introduction to Personal Finance",
        duration: 3_600,
      },
      {
        id: "courseId0_lessonId1",
        name: "Budgeting",
        duration: 4_800,
      },
    ],
    coverImage: randImg({ width: 200, height: 200 }),
  },
  {
    id: "courseId1",
    name: "Intro to investing",
    description: "Learn how to invest in the stock market",
    lessons: [
      {
        id: "courseId1_lessonId0",
        name: "What is a stock?",
        duration: 1_800,
      },
      {
        id: "courseId1_lessonId1",
        name: "What is a bond?",
        duration: 2_400,
      },
      {
        id: "courseId1_lessonId1",
        name: "What is the stock market?",
        duration: 3_600,
      },
    ],
    coverImage: randImg({ width: 200, height: 200 }),
  },
  {
    id: "courseId2",
    name: "Budgeting",
    description: "Learn how to budget",
    lessons: [
      {
        id: "courseId2_lessonId0",
        name: "What is a budget?",
        duration: 1_800,
      },
      {
        id: "courseId2_lessonId1",
        name: "3 rules of budgeting",
        duration: 2_400,
      },
      {
        id: "courseId2_lessonId1",
        name: "How to budget?",
        duration: 7_200,
      },
    ],
    coverImage: randImg({ width: 200, height: 200 }),
  },
  {
    id: "courseId3",
    name: "Retirement",
    description: "Learn how to retire",
    lessons: [
      {
        id: "courseId3_lessonId0",
        name: "What is retirement?",
        duration: 1_800,
      },
      {
        id: "courseId3_lessonId1",
        name: "How to retire?",
        duration: 4_800,
      },
    ],
    coverImage: randImg({ width: 200, height: 200 }),
  },
];

export class MockRepos {
  bookmarks: BookmarkRepo;
  courses: CourseRepo;
  communityPosts: CommunityRepo

  constructor() {
    this.bookmarks = new MockBookmarkRepo(initialCourseBookmarks);
    this.courses = new MockCourseRepo(initialCourses);
    this.communityPosts = new MockCommunityRepo(initialCommunityPosts);
  }
}
