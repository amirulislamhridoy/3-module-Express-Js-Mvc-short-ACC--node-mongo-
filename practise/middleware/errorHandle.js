const errorHandle = (err, req, res, next) => {
    console.log(err.message)
}
module.exports = errorHandle