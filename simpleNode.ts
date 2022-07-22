import * as http from "http"
const server = http.createServer((request, response) =>{
    if(request.url == "/a"){
        response.write("api a is invoked");
    }
    if(request.url == "/b"){
        response.write("api b is invoked");
    }
    response.end();
});

server.listen(process.env.PORT || 3000, ()=> console.log("simple Node Created"));