const _ = require('lodash');

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
    submitAssignment: async (parent, { studentAssignmentId, file }, ctx) => {
      const latestSubmissionId = _.last(ctx.dataService.submissions).id;
      const submission = {
        id: latestSubmissionId + 1,
        studentAssignmentId,
        file: await file, // would be better to ship the stream off to s3 etc here, but for now it's mocked so let's just leave it.
      };
      ctx.dataService.submissions.push(submission);
      return submission;
    },
  },
  Student: {
    studentAssignments: (student, args, ctx) =>
      _.filter(
        ctx.dataService.studentAssignments,
        studentAssignment => studentAssignment.studentId === student.id,
      ),
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
