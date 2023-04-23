// const { getAllTools } = require('../../contoler/tools.contoler')

const { postTool, getAllTools, download, redirect, getSingleTool, updateSingleTool, deleteSingleTool} = require('../../contoler/tools.cotoler')
const { limiter } = require('../../middleware/limitter')
const { viewCount } = require('../../middleware/viewCounts')

const router = require('express').Router()

// router.get('/tools', getAllTools) // it is possible
router.get('/download', download)
router.get('/redirect', redirect)

// router.get('/tool/:id', getSingleTool)
router.route('/tool/:id').get(getSingleTool).patch(updateSingleTool).delete(deleteSingleTool)

router.route('/tools')
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
    */
   // router label middleware
   .get(viewCount, limiter, (req, res) => {
       res.send('get all tools')
    })
    .post(postTool)

module.exports = router