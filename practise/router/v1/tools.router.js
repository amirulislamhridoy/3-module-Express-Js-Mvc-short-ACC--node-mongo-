const { getAllTools, getSingleTool, postSingleTool, updateSingleTool, deleteSingleTool } = require('../../contoler/tools.Contoler')
const limiter = require('../../middleware/rateLimitMiddleware')
const { viewCount } = require('../../middleware/viewCount')

const router = require('express').Router()

// router label middleware
router.get('/tools', viewCount, limiter, getAllTools)
router.post('/tool', postSingleTool)
router.route('/tool/:id')
    /** 
            * @this format name is JS-doc-syntext
            * @api {get} /tools save a tools
            * @api Description Get all the tools
            * @apiPermission admin || all
            * @apiHeader {String} Authorization User's access token
            * @apiParam {Number{1-}}       [page=1]      list page
            * @apiParam {Number{1-100}}    [limit=10]    Users per page
            * @apiSuccess {Object[]} all the tools.
            * @apiError (Unauthorized 401)  Unauthorized    Only    authenticated users can access the data
            * @apiError (Forbidden 403)     Forbidden       Only    admins can access the data
        */.get(getSingleTool).patch(updateSingleTool).delete(deleteSingleTool)

module.exports = router