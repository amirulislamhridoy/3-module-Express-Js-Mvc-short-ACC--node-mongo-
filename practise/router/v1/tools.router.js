const { getAllTools, getSingleTool, postSingleTool } = require('../../contoler/tools.Contoler')

const router = require('express').Router()

router.get('/tools', getAllTools)
router.post('/tool', postSingleTool)
router.route('/tool/:id').get(getSingleTool)

module.exports = router