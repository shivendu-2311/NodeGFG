import koa from "koa"
import Router from "koa-router"

const server = new koa();
const router = new Router();

router.get("/a", ctx =>{
    ctx.response.body = "api a is invoked"
})
router.get("/b", ctx =>{
    ctx.response.body = "api b is invoked"
})
server.use(router.routes());

server.listen(process.env.PORT || 3000, () => console.log("Koa server is created sucessfully"))

