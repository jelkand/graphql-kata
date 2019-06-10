const students = [
  {
    id: '0',
    firstName: 'Mike',
    lastName: 'Wazowski',
    createdAt: Date.now().toString(),
  },
  {
    id: '1',
    firstName: 'Inigo',
    lastName: 'Montoya',
    createdAt: Date.now().toString(),
  },
  {
    id: '2',
    firstName: 'Darth',
    lastName: 'Vader',
    createdAt: Date.now().toString(),
  },
];

const assignments = [
  { id: '0', name: 'Your first assignment', createdAt: Date.now().toString() },
  {
    id: '1',
    name: 'Moving up in the world!',
    createdAt: Date.now().toString(),
  },
  { id: '2', name: 'The final test', createdAt: Date.now().toString() },
];

const studentAssignments = [
  {
    id: '0',
    studentId: '0',
    assignmentId: '0',
    createdAt: Date.now().toString(),
  },
  {
    id: '1',
    studentId: '0',
    assignmentId: '1',
    createdAt: Date.now().toString(),
  },
  {
    id: '2',
    studentId: '0',
    assignmentId: '2',
    createdAt: Date.now().toString(),
  },
  {
    id: '3',
    studentId: '1',
    assignmentId: '0',
    createdAt: Date.now().toString(),
  },
  {
    id: '4',
    studentId: '1',
    assignmentId: '1',
    createdAt: Date.now().toString(),
  },
];

const submissions = [
  {
    id: '0',
    studentAssignmentId: '0',
    file: { filename: 'didnt-go-well-mike.txt' },
    score: 55.2,
  },
  {
    id: '1',
    studentAssignmentId: '3',
    file: { filename: 'good-job-inigo.txt' },
    score: 100,
  },
  {
    id: '2',
    studentAssignmentId: '0',
    file: { filename: 'good-job-mike.txt' },
    score: 85.555555555555,
  },
  {
    id: '3',
    studentAssignmentId: '1',
    file: { filename: 'got-it-this-time-mike.mp4' },
    score: 94,
  },
  {
    id: '4',
    studentAssignmentId: '4',
    file: { filename: 'inigo-ungraded.jpg' },
    score: null,
  },
];

module.exports = {
  students,
  assignments,
  studentAssignments,
  submissions,
};
