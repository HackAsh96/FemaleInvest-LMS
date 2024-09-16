"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockRepos = void 0;
const MockBookmarkRepo_1 = require("./MockBookmarkRepo");
const MockCommunityRepo_1 = require("./MockCommunityRepo");
const MockCourseRepo_1 = require("./MockCourseRepo");
const falso_1 = require("@ngneat/falso");
const getRandomName = () => {
    const names = [
        'Amanda Brogaard', 'Ivona Colic', 'Mads Willumsen', 'Paolo Scanferla',
        'Sophia Jensen', 'Lucas Hansen', 'Emma Olsen', 'Oliver Nielsen',
        'Ella Sørensen', 'Oscar Madsen', 'Anna Kristensen', 'William Petersen'
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
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
    return contents[randomIndex];
};
const initialCommunityPosts = Array.from({ length: 10 }, (_, index) => ({
    id: `post-${index}`,
    author: getRandomName(),
    content: getRandomContent(),
    isLiked: false,
    timestamp: `${Math.floor(Math.random() * 60)} minutes ago`,
}));
const initialCourseBookmarks = Array.from({ length: 4 }, (_, index) => ({
    userId: "userId",
    courseId: `courseId${index}`
}));
const initialCourses = [
    {
        id: "courseId0",
        name: "Personal Finance",
        description: "Learn how to manage your personal finance",
        lessons: [
            {
                id: "courseId0_lessonId0",
                name: "Introduction to Personal Finance",
                duration: 3600,
            },
            {
                id: "courseId0_lessonId1",
                name: "Budgeting",
                duration: 4800,
            },
        ],
        coverImage: (0, falso_1.randImg)({ width: 200, height: 200 }),
    },
    {
        id: "courseId1",
        name: "Intro to investing",
        description: "Learn how to invest in the stock market",
        lessons: [
            {
                id: "courseId1_lessonId0",
                name: "What is a stock?",
                duration: 1800,
            },
            {
                id: "courseId1_lessonId1",
                name: "What is a bond?",
                duration: 2400,
            },
            {
                id: "courseId1_lessonId1",
                name: "What is the stock market?",
                duration: 3600,
            },
        ],
        coverImage: (0, falso_1.randImg)({ width: 200, height: 200 }),
    },
    {
        id: "courseId2",
        name: "Budgeting",
        description: "Learn how to budget",
        lessons: [
            {
                id: "courseId2_lessonId0",
                name: "What is a budget?",
                duration: 1800,
            },
            {
                id: "courseId2_lessonId1",
                name: "3 rules of budgeting",
                duration: 2400,
            },
            {
                id: "courseId2_lessonId1",
                name: "How to budget?",
                duration: 7200,
            },
        ],
        coverImage: (0, falso_1.randImg)({ width: 200, height: 200 }),
    },
    {
        id: "courseId3",
        name: "Retirement",
        description: "Learn how to retire",
        lessons: [
            {
                id: "courseId3_lessonId0",
                name: "What is retirement?",
                duration: 1800,
            },
            {
                id: "courseId3_lessonId1",
                name: "How to retire?",
                duration: 4800,
            },
        ],
        coverImage: (0, falso_1.randImg)({ width: 200, height: 200 }),
    },
];
class MockRepos {
    constructor() {
        this.bookmarks = new MockBookmarkRepo_1.MockBookmarkRepo(initialCourseBookmarks);
        this.courses = new MockCourseRepo_1.MockCourseRepo(initialCourses);
        this.communityPosts = new MockCommunityRepo_1.MockCommunityRepo(initialCommunityPosts);
    }
}
exports.MockRepos = MockRepos;
//# sourceMappingURL=MockRepos.js.map