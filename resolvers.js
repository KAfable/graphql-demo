const resolvers = {
  Query: {
    hello: () => true,
    getBooks: () => [
      {
        title: "Game of Thrones",
        author: {
          firstName: "George"
        },
        pageCount: 500,
        genre: "FANTASY"
      },
      {
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        pageCount: 400,
        genre: "FANTASY"
      },
      {
        title: "Wise Man's Fear",
        author: "Patrick Rothfuss",
        pageCount: 250,
        genre: "FANTASY"
      },
      {
        title: "Way of Kings",
        author: "Brandon Sanderson",
        pageCount: 600,
        genre: "FANTASY"
      },
      {
        title: "Words of Radiance",
        author: "Brandon Sanderson",
        pageCount: 800,
        genre: "FANTASY"
      },
      {
        title: "Oathbringer",
        author: "Brandon Sanderson",
        pageCount: 69,
        genre: "FANTASY"
      }
    ]
  }
};

module.exports = resolvers;
