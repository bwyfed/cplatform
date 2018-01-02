/**
 * Created by BWY on 2018/1/2.
 */
var express = require('express');
var router = express.Router();

router.get('/industry', function(req, res) {
    console.log(111);
    res.render('second',{ title: '行业及解决方案',type: 'industry'})
});
/* GET users listing. */
router.get('/service/:subtype1',function(req, res){
    console.log(222);
    var subtype1 = req.params['subtype1'];
    res.render('second', { title: '服务类型',type: subtype1 });
});


module.exports = router;