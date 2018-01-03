var express = require('express');
var router = express.Router();
var upload = require('./fileuploads.js')

/* GET users listing. */
router.post('/', upload.single('avatar'), function(req, res, next) {
	if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});

module.exports = router;
