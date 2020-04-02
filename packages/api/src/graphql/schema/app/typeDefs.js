import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    ping: String!
  }
`;

export default typeDefs;
