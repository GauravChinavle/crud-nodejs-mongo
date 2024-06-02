function logger(req, res, next) {
    console.log("apiName:", req.baseUrl);
    console.log("request:", { body: req.body, params: req.params, query: req.params });
    next();
}

module.exports = logger;