const _ = require('lodash');

const resolvers = {
  Query: {
    students: (parent, args, ctx) => ctx.dataService.students,
    student: (parent, args, ctx) =>
      _.find(ctx.dataService.students, student => student.id === args.id),
  },
};

const calculateTopScoreFropmStudentAssignment = (
  studentAssignment,
  { submissions },
) => 100;

module.exports = resolvers;