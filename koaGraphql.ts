import * as Router  from "koa-router";
import * as koa from "koa";
import {buildSchema} from "type-graphql";
import HotelResolver from "./hotelResolver";
import {graphqlHTTP } from "koa-graphql";
import {ApolloServer} from "apollo-server-koa"
import * as cors from "@koa/cors";
import "./connectDb";

async function main(){
    const app = new koa();
    const resolvers = await buildSchema({resolvers: [HotelResolver]});
    const apolloserver = new ApolloServer({schema: resolvers});
    const router = new Router();
    router.all("/graphql", graphqlHTTP({schema: resolvers}));
    apolloserver.applyMiddleware({app});
    app.use(router.routes()).use(router.allowedMethods());
    app.use(cors());
    app.listen(process.env.PORT || 3005, () => console.log("GraphQl is woeking"));  

    
}
main();


