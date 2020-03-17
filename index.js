const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const port = process.env.PORT || 5000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app });

app.listen({ port }, () => {
  console.log(`We are live at ${server.graphqlPath}`);
});
