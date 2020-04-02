import _ from "lodash";

const db = null;

const context = ({ ctx }) => {
  const [authorizationType, jwt] = _.get(
    ctx,
    "req.headers.authorization",
    ""
  ).split(" ");
  return { db, jwt };
};

export default context;
