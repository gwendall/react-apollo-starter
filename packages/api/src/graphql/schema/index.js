import { mergeSchemas } from "graphql-tools";
import app from "./app";

const schema = mergeSchemas({
  schemas: [app]
});

export default schema;
