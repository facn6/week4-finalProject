const handlers = require('./handlers');

const router = (request, response) => {
    const url =request.url;
    if(url === '/')
    {
        handlers.handlerHomeRoute(request,response);
    }
    else if(url.indexOf('public') !== -1){
        handlers.handlePublic(request,response);
    }
    else{
       handlers.handleNotFound(response);
        }

}

module.exports = router;