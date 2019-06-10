const _ = require('lodash');

const resolvers = {
  Query: {
    students: (parent, args, ctx) => _.noop(),
    student: (parent, args, ctx) => _.noop(),
  },
  Mutation: {
    submitAssignment: async (parent, { studentAssignmentId, file }, ctx) => _.noop(),
  },
  Student: {
    studentAssignments: (student, args, ctx) => _.noop(),
  },
  StudentAssignment: {
    submissions: (studentAssignment, args, ctx) => _.noop(),
    topScore: (studentAssignment, args, ctx) => _.noop(),
    assignment: (studentAssignment, args, ctx) => _.noop(),
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
