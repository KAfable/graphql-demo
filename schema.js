const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello: String
    # get all the books in my database and those in Congress
    getBooks: [Book]!
    author(id: ID!): Author
  }

  type Mutation {
    createAuthor(firstName: String, age: Int): Author
  }

  # Scalar types
  type Book {
    id: ID!
    title: String!
    pageCount: Int
    author: Author!
    genre: Genre
  }

  enum Genre {
    HORROR
    ROMANCE
    FANTASY
    COMEDY
  }

  type Author {
    id: ID!
    books: [Book]!
    firstName: String
    age: Int
  }
`;

module.exports = typeDefs;
