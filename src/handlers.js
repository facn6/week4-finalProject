const fs = require("fs");
const path =require("path");
const rgb = require('./rgb.json');

const handlerHomeRoute = (request,response)=>{
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
    
    const extention = url.split('.')[1];
        const extentionType = {
            html:'text/html',
            css: 'text/css',
            js: 'application/javascript',
            json: 'application/json'
        }

        const filepath = path.join(__dirname , '..','public' , url);
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


const handleJsonFile = (response)=>{
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify(rgb));
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