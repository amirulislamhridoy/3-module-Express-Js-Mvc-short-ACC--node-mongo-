let tools = [{_id: 1, name: 'h'},{_id: 2, name: 'h'},{_id: 3, name: 'h'},{_id: 4, name: 'h'}]

module.exports.download = (req, res, next) => {
  res.download(__dirname + '/one-children.jpeg')
}
module.exports.redirect = (req, res, next) => {
  res.redirect('/login')
}

module.exports.getAllTools = (req, res) => {
  res.send('get all tools')
}
module.exports.postTool = (req, res) => {
  res.send('Added a tool')
}

module.exports.getSingleTool = (req, res) => {
  const {id} = req.params
  const tool = tools.find(t => t._id == id)
  res.send(tool)
}
module.exports.updateSingleTool = (req, res) => {
  const {id} = req.params
  const {name} = req.body
  let newData = tools.find(t => t._id === Number(id))
  newData.name = name
  tools = [...tools.filter(t => t._id !== +id), newData]
  res.send(tools)
}
module.exports.deleteSingleTool = (req, res) => {
  const {id} = req.params
  tools = tools.filter(t => t._id !== +id)
  res.send(tools)
}

// ai vabe o kora jay module.exports = {updateSingleTool}