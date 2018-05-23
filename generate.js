import { createGraphqlSchema } from "mongo-graphql-starter";
import projectSetup from "./setup";

import path from "path";

createGraphqlSchema(projectSetup, path.resolve("./"));