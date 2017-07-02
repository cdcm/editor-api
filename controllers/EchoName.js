// module.js - what is that?

module.exports = function(req, res, next) {

    res.send(Object.assign({ token: req.headers.token }, req.params));

    return next();
};
