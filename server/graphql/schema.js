const { gql } = require('apollo-server-express');

const schema = gql`
  type Query {
    students: [Student]
    student(id: String!): Student
  }
  type Student {
    id: String! # UUID v4
    firstName: String!
    lastName: String!
    createdAt: String!
    # studentAssignments: [StudentAssignment]  # We don't have student assignments yet :) 
  }
  type Assignment {
    id: String!
  }
  type StudentAssignment {
    id: String!
  }
`;

module.exports = schema;
