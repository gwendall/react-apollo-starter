import _ from "lodash";

const resolvers = {
  Query: {
    ping: (o, args, ctx, info) => {
      return "hello world";
    }
  }
};

export default resolvers;
