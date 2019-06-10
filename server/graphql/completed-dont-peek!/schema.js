const { gql } = require('apollo-server-express');

const schema = gql`
  type Query {
    students: [Student]
    student(id: String!): Student
    studentAssignmentsByStudent(studentId: String!): [StudentAssignment]
    studentAssignment(id: String!): StudentAssignment
  }
  type Mutation {
    updateStudent(id: String!, firstName: String, lastName: String): Student
  }
  type Student {
    id: String!
    firstName: String!
    lastName: String!
    createdAt: String!
    studentAssignments: [StudentAssignment]
    todos: [Todo]
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
  type Todo {
    userId: String!
    id: String!
    title: String
    completed: Boolean
  }
`;

module.exports = schema;
