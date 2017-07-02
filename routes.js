// routes
module.exports = [
    {
        method: 'get',
        path: '/echo/:name',
        controller: require('./controllers/EchoName')
    }
];
