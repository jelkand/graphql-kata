const _ = require('lodash');
const async  = require('express-async-await')
const fetch = require('node-fetch')

const resolvers = {
  Query: {
    students: (parent, args, ctx) => ctx.dataService.students,
    student: (parent, args, ctx) =>
      _.find(ctx.dataService.students, student => student.id === args.id),
    studentAssignmentsByStudent: (parent, args, ctx) =>
      _.filter(
        ctx.dataService.studentAssignments,
        studentAssignment => studentAssignment.studentId === args.studentId,
      ),
    studentAssignment: (parent, args, ctx) =>
      _.find(
        ctx.dataService.studentAssignments,
        studentAssignment => studentAssignment.id === args.id,
      ),
  },
  Mutation: {
    updateStudent: (parent, args, ctx) => {
      const studentIdx = _.findIndex(ctx.dataService.students, student => student.id === args.id);
      _.assign(ctx.dataService.students[studentIdx], args);
      return ctx.dataService.students[studentIdx];
    }
  },
  Student: {
    studentAssignments: (student, args, ctx) =>
      _.filter(
        ctx.dataService.studentAssignments,
        studentAssignment => studentAssignment.studentId === student.id,
      ),
      todos: async (student, args, ctx) => {
        const url = `https://jsonplaceholder.typicode.com/todos?userId=${student.id}`;
        return await fetch(url);
      }
  },
  StudentAssignment: {
    submissions: (studentAssignment, args, ctx) =>
      _.filter(
        ctx.dataService.submissions,
        submission => submission.studentAssignmentId === studentAssignment.id,
      ),
    topScore: (studentAssignment, args, ctx) =>
      calculateTopScoreFropmStudentAssignment(
        studentAssignment,
        ctx.dataService,
      ),
    assignment: (studentAssignment, args, ctx) =>
      _.find(
        ctx.dataService.assignments,
        assignment => assignment.id === studentAssignment.assignmentId,
      ),
    student: (studentAssignment, args, ctx) =>
      _.find(
        ctx.dataService.students,
        student => student.id === studentAssignment.studentId,
      ),
  },
  Submission: {
    studentAssignment: (submission, args, ctx) =>
      _.find(
        ctx.dataService.studentAssignments,
        studentAssignment =>
          studentAssignment.id === submission.studentAssignmentId,
      ),
  },
};

const calculateTopScoreFropmStudentAssignment = (
  studentAssignment,
  { submissions },
) =>
  _.chain(submissions)
    .filter(
      submission => submission.studentAssignmentId === studentAssignment.id,
    )
    .map('score')
    .max()
    .value();

module.exports = resolvers;
