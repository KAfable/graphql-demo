const { books, authors } = require("./models");

const resolvers = {
  Query: {
    hello: () => true,
    getBooks: () => []
  },
  Mutation: {
    createAuthor: async name => {
      console.log(name);
      const [author] = await authors.add({ first_name: name });
      return author;
    }
  }
};

module.exports = resolvers;
