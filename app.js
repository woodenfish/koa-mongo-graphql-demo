const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
import { MongoClient } from "mongodb";

import resolvers from "./graphQL/resolver";
import schema from "./graphQL/schema";
import { makeExecutableSchema } from "graphql-tools";

const dbPromise = MongoClient.connect("mongodb://localhost:27017/test");
const root = {
  db: dbPromise
};
const executableSchema = makeExecutableSchema({ typeDefs: schema, resolvers });

const app = new Koa();

app.use(mount('/graphql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
  rootValue: root
})));

app.listen(4000);