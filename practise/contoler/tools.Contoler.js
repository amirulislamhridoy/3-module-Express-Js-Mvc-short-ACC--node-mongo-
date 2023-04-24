let tools = [{_id: 1, name: 'h'},{_id: 2, name: 'h'},{_id: 3, name: 'h'},{_id: 4, name: 'h'},{_id: 5, name: 'h'}]

module.exports.getAllTools = (req, res, next) => {
    res.send('get All tools')
}

module.exports.getSingleTool = (req, res, next) => {
    const {id}  = req.params
    const newTool = tools.find(t => t._id === +id)
    res.send(newTool)
}
module.exports.postSingleTool = (req, res, next) =>{
    const data = req.body
    console.log('body', data)
    // tools = [...tools, data]
    res.send(tools)
}