const { gql } = require('apollo-server-express');

const schema = gql`
  type Query {
    students: [Student]
    student(id: String): Student
    studentAssignmentsByStudent(studentId: String): [StudentAssignment]
    studentAssignment(id: String): StudentAssignment
  }
  type Mutation {
    submitAssignment(studentAssignmentId: String!, file: Upload!): Submission!
  }
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type Student {
    id: String! # UUID v4
    firstName: String!
    lastName: String!
    createdAt: String!
    studentAssignments: [StudentAssignment]
  }
  type Assignment {
    id: String!
    name: String!
    createdAt: String!
  }
  type StudentAssignment {
    id: String!
    student: Student!
    assignment: Assignment!
    submissions: [Submission]
    topScore: Float
    createdAt: String!
  }
  type Submission {
    id: String!
    studentAssignment: StudentAssignment!
    score: Float
    file: File
    createdAt: String!
  }
`;

module.exports = schema;
