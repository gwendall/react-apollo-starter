import { ApolloServer } from "apollo-server";
import schema from "~/graphql/schema";
import middlewares from "~/graphql/middlewares";
import context from "~/graphql/context";

const server = new ApolloServer({ schema, context, middlewares });
const port = process.env.PORT || 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
