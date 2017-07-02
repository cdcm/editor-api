const restify = require('restify');

const routes = require('./routes') || [];
routes.push({
    method: 'get',
    path: '/',
    controller: (req, res) => {
        return res.send(404, { message: 'No routes defined.' });
    }
});

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.use(function foo(req, res, next) {

    if (!req.headers.token) {
        return res.send(403, { message: 'No token set.' });
    }

    next();
});

routes.forEach(route => {
    server[route.method](route.path, route.controller);
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});