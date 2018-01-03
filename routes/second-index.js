/**
 * Created by BWY on 2018/1/2.
 */
var express = require('express');
var router = express.Router();

var data_service = require('../app/mock/service.json');
var data_industry = require('../app/mock/industry.json');
var data_customers = require('../app/mock/customers.json');

router.get('/industry/telecom', function(req, res) {
    console.log(111);
    res.render('second',{ title: '行业及解决方案-电信',type: 'industry_telecom',data: data_industry})
});
router.get('/industry', function(req, res) {
    console.log(111);
    res.render('second',{ title: '行业及解决方案',type: 'industry',data: data_industry})
});
/* GET users listing. */
router.get('/service/:subtype1',function(req, res){
    console.log(222);
    var subtype1 = req.params['subtype1'];
    res.render('second', { title: '服务类型',type: 'service',subtype:subtype1, data: data_service[subtype1] });
});

router.get('/customers',function(req, res) {
    res.render('second', { title: '合作客户', type: 'customers', data: data_customers});
});

router.get('/about', function(req, res) {
    res.render('second', {title: '关于宽连', type: 'about'})
});

module.exports = router;