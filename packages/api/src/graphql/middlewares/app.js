export default {
  Query: {
    ping: async (resolve, parent, args, ctx, info) => {
      return resolve();
    }
  }
};
