let count = 0;
const viewCount = (req, res, next) => {
    count++;
    console.log('view count middleware', count)
    next()
}

module.exports = {viewCount}