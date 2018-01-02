/**
 * Created by BWY on 2018/1/2.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:type',function(req, res){
    var type=req.params['type'];
    res.render('service', { title: '服务类型',type: type });
});

module.exports = router;