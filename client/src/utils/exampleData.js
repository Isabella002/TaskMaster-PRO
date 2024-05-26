export const tasks = [
  {
    _id: "1",
    title: "Redesign Landing Page",
    priority: "high",
    stage: "todo",
    date: new Date("2023-03-05").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user1", name: "Liam Johnson" },
      { _id: "user2", name: "Olivia Brown" },
    ],
    subTasks: [
      {
        _id: "task1",
        title: "Header Component",
        date: new Date("2023-03-05").toISOString(),
        tag: "Design",
      },
      {
        _id: "task2",
        title: "Footer Component",
        date: new Date("2023-03-06").toISOString(),
        tag: "Coding",
      },
    ],
  },
  {
    _id: "2",
    title: "Implement Authentication",
    priority: "medium",
    stage: "in progress",
    date: new Date("2023-04-01").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user3", name: "Noah Smith" },
      { _id: "user4", name: "Emma Davis" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "OAuth Integration",
        date: new Date("2023-04-02").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "JWT Implementation",
        date: new Date("2023-04-03").toISOString(),
        tag: "Security",
      },
    ],
  },
  {
    _id: "3",
    title: "Database Optimization",
    priority: "low",
    stage: "completed",
    date: new Date("2023-05-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Sophia Martinez" },
      { _id: "user5", name: "Mason Wilson" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Indexing",
        date: new Date("2023-05-11").toISOString(),
        tag: "Database",
      },
      {
        _id: "task1",
        title: "Query Optimization",
        date: new Date("2023-05-12").toISOString(),
        tag: "Performance",
      },
    ],
  },
  {
    _id: "4",
    title: "Project Planning",
    priority: "high",
    stage: "in progress",
    date: new Date("2023-06-15").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Isabella Harris" },
      { _id: "user5", name: "James Thompson" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Timeline Creation",
        date: new Date("2023-06-16").toISOString(),
        tag: "Management",
      },
      {
        _id: "task1",
        title: "Resource Allocation",
        date: new Date("2023-06-17").toISOString(),
        tag: "Planning",
      },
    ],
  },
  {
    _id: "5",
    title: "API Development",
    priority: "high",
    stage: "in progress",
    date: new Date("2023-07-01").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Charlotte Moore" },
      { _id: "user5", name: "Benjamin Garcia" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "REST API Design",
        date: new Date("2023-07-02").toISOString(),
        tag: "Coding",
      },
      {
        _id: "task1",
        title: "Endpoint Documentation",
        date: new Date("2023-07-03").toISOString(),
        tag: "Documentation",
      },
    ],
  },
  {
    _id: "6",
    title: "UI/UX Enhancement",
    priority: "high",
    stage: "todo",
    date: new Date("2023-08-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Amelia Taylor" },
      { _id: "user5", name: "Lucas Lee" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "User Feedback Analysis",
        date: new Date("2023-08-11").toISOString(),
        tag: "Research",
      },
      {
        _id: "task1",
        title: "UI Redesign",
        date: new Date("2023-08-12").toISOString(),
        tag: "Design",
      },
    ],
  },
  {
    _id: "7",
    title: "Marketing Campaign",
    priority: "high",
    stage: "completed",
    date: new Date("2023-09-10").toISOString(),
    comments: [],
    assets: [],
    team: [
      { _id: "user2", name: "Harper White" },
      { _id: "user5", name: "Henry Green" },
    ],
    subTasks: [
      {
        _id: "task2",
        title: "Social Media Strategy",
        date: new Date("2023-09-11").toISOString(),
        tag: "Marketing",
      },
      {
        _id: "task1",
        title: "Content Creation",
        date: new Date("2023-09-12").toISOString(),
        tag: "Content",
      },
    ],
  },
];

export const activitiesData = [
  {
    _id: "0",
    type: "started",
    activity: "initiated this task.",
    date: new Date("2023-03-05").toISOString(),
    by: "Olivia Brown",
  },
  {
    _id: "1",
    type: "commented",
    activity:
      "Great progress on the initial design. Looking forward to the final touches.",
    date: new Date("2023-03-06").toISOString(),
    by: "Noah Smith",
  },
  {
    _id: "2",
    type: "assigned",
    activity: "task to Lucas Lee",
    date: new Date("2023-03-07").toISOString(),
    by: "Emma Davis",
  },
  {
    _id: "3",
    type: "in progress",
    activity:
      "Currently working on the backend API integration.",
    date: new Date("2024-04-01").toISOString(),
    by: "Mason Wilson",
  },
  {
    _id: "4",
    type: "bug",
    activity: "found a critical issue in the authentication module.",
    date: new Date("2023-05-01").toISOString(),
    by: "Sophia Martinez",
  },
  {
    _id: "5",
    type: "completed",
    activity: "completed the database optimization task.",
    date: new Date("2023-06-01").toISOString(),
    by: "James Thompson",
  },
];

export const users = [
  {
    name: "Liam Johnson",
    title: "Frontend Developer",
    email: "liam.johnson@example.com",
    role: "Developer",
    isActive: true,
  },
  {
    name: "Emma Davis",
    title: "Product Manager",
    email: "emma.davis@example.com",
    role: "Manager",
  },
  {
    name: "Noah Smith",
    title: "UI/UX Designer",
    email: "noah.smith@example.com",
    role: "Designer",
    isActive: true,
  },
  {
    name: "Olivia Brown",
    title: "Backend Developer",
    email: "olivia.brown@example.com",
    role: "Developer",
  },
  {
    name: "Sophia Martinez",
    title: "QA Engineer",
    email: "sophia.martinez@example.com",
    role: "Tester",
  },
  {
    name: "Mason Wilson",
    title: "Data Analyst",
    email: "mason.wilson@example.com",
    role: "Analyst",
  },
  {
    name: "Isabella Harris",
    title: "Software Engineer",
    email: "isabella.harris@example.com",
    role: "Engineer",
  },
  {
    name: "James Thompson",
    title: "Full Stack Developer",
    email: "james.thompson@example.com",
    role: "Developer",
  },
  {
    name: "Charlotte Moore",
    title: "DevOps Engineer",
    email: "charlotte.moore@example.com",
    role: "Engineer",
  },
  {
    name: "Benjamin Garcia",
    title: "Security Specialist",
    email: "benjamin.garcia@example.com",
    role: "Specialist",
  },
];
