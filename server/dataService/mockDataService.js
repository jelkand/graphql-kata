/*
* Examples of the data model. Ideally the postgres table would be set up similarly.
* There are a couple join tables, etc in here.
*/

const students = [
  {
    id: '254ffc73-2942-4f5c-9cd5-351f2fba51af',
    firstName: 'Mike',
    lastName: 'Wazowski',
    createdAt: Date.now().toString(),
  },
  {
    id: '3075d637-d621-4aa7-883d-e035a6222efd',
    firstName: 'Inigo',
    lastName: 'Montoya',
    createdAt: Date.now().toString(),
  },
  {
    id: '6c9e48b4-4049-409e-9d1c-60ac8f553b07',
    firstName: 'Darth',
    lastName: 'Vader',
    createdAt: Date.now().toString(),
  },
];

const assignments = [
  { id: '0', name: 'Your first assignment', createdAt: Date.now().toString() }, // Date.now is suboptimal but will do until I hook in momentjs
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
    studentId: '254ffc73-2942-4f5c-9cd5-351f2fba51af',
    assignmentId: '0',
    createdAt: Date.now().toString(),
  },
  {
    id: '1',
    studentId: '254ffc73-2942-4f5c-9cd5-351f2fba51af',
    assignmentId: '1',
    createdAt: Date.now().toString(),
  },
  {
    id: '2',
    studentId: '254ffc73-2942-4f5c-9cd5-351f2fba51af',
    assignmentId: '2',
    createdAt: Date.now().toString(),
  },
  {
    id: '3',
    studentId: '3075d637-d621-4aa7-883d-e035a6222efd',
    assignmentId: '0',
    createdAt: Date.now().toString(),
  },
  {
    id: '4',
    studentId: '3075d637-d621-4aa7-883d-e035a6222efd',
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
