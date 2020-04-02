import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export default () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

const App = () => {
  const pingQuery = useQuery(PING_QUERY);
  return (
    <div style={{ padding: 15 }}>
      <h1>{`React - Apollo Starter`}</h1>
      <pre>{JSON.stringify(pingQuery.data, null, 2)}</pre>
    </div>
  );
};

const PING_QUERY = gql`
  query ping {
    ping
  }
`;
