function errorHandler(err, req, res, next){
    res.status(400);
    res.json({
        error: "Could not decode request: JSON parsing failed"
    });
}

module.exports = errorHandler;