const fs = require("fs");
const path =require("path");


const handlerHomeRoute = (request , response)=>{
    const filepath = path.join(__dirname, '..' , 'public' , 'index.html');
    fs.readFile(filepath, (error,file)=>{
        if(error)
        {
            console.log(error);
            response.writeHead(500, {'Content-type' : 'text/html'});
            response.end(`<h1> we have an error , sorry</h1>`);
        }
        else
        {
            response.writeHead(200 , {'Content-type' : 'text/html'});
            response.end(file);
        }
    });
}
const handlerHomeRouteJ = (request , response)=>{
    const filepath = path.join(__dirname, '..' , 'public' , 'main.js');
    fs.readFile(filepath, (error,file)=>{
        if(error)
        {
            console.log(error);
            response.writeHead(500, {"Content-type" : "application/javascript"});
            response.end(`<h1> we have an error , sorry</h1>`);
        }
        else
        {
            response.writeHead(200 , {'Content-type' : 'application/javascript'});
            response.end(file);
        }
    });
}

const handlePublic = (request,response)=>{

    const url =request.url;
    var filepath;
    const extention = url.split('.')[1];
        const extentionType = {
            html:'text/html',
            css: 'text/css',
            js: 'application/javascript',
            json: 'application/json'
        }

         if(extention === 'json'){
            filepath = path.join(__dirname , '..', url);
         }
         else{
        filepath = path.join(__dirname , '..','public' , url);
        }

        fs.readFile(filepath ,(error,file)=>{
            if(error)
            {
                console.log(error);
                response.writeHead(500 , {'Content-type' : extentionType.html});
                response.end('<h1>there is an error</h1>');
            }
            else{
                console.log(filepath)
                response.writeHead(200 , {"Content-Type" : extentionType[extention]})
                response.end(file);
            }
        })
}


const handleJsonFile = (res)=>{
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(rgb));
}
const handleNotFound = (response)=>
{
    response.writeHead(404);
    response.end(`<h1>page is not found</h1>`);
}
module.exports={
     handlerHomeRoute,
     handlePublic,
     handleNotFound,
     handleJsonFile,
     handlerHomeRouteJ
}