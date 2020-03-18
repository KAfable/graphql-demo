const { books, authors } = require("./models");

const resolvers = {
  Query: {
    hello: () => true,
    getBooks: () => [],
    author: (_, args) => authors.find(args.id)
  },
  Mutation: {
    createAuthor: async (parent, { firstName, age }, context) => {
      // console.log(firstName);
      const [id] = await authors.add({ first_name: firstName, age });
      const author = await authors.find(id);
      return author;
    }
  },
  Author: {
    // NORMALLY DONT NEED THIS
    // but I'm bad when I did my first migrations
    firstName: parent => {
      return parent.first_name;
    }
  }
};

module.exports = resolvers;
