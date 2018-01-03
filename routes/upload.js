var express = require('express');
var router = express.Router();
var upload = require('./fileuploads.js')

/* 文件上传请求 */
router.post('/', upload.single('avatar'), function(req, res, next) {
	if (req.file) {
        // res.send('文件上传成功')
        res.json({ 
        	code: 0,
        	msg: '文件上传成功',
        	data: req.file
        });
    }
});

module.exports = router;
