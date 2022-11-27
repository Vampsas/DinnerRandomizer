const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const app = express();
//dynamic port definition
const port = process.env.PORT || 4000;
//schema qrqphQL
const typeDefs = gql(
    `type Query {
        hello: String}`
);
const resolvers = {
    Query: {
        hello: () => 'Hello World'
    }
};
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/api' });
    app.listen({ port }, () => console.log(`Server GraphQl on is working under http://localhost:${port}${apolloServer.graphqlPath}`));
}
startServer();



