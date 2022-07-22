import  koa from "koa"
import * as dotenv from "dotenv";
import  { Pool } from "pg";

dotenv.config;


const server = new koa();
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl :{
        rejectUnauthorized: false
    }
})

server.use(async ctx =>{
    await pool.connect();
    const output = await pool.query("select * from hotels");
    ctx.response.body = output;
})
server.listen(process.env.PORT || 3000, ()=> console.log("koa sql is running fine"));
