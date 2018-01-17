/**
 * Created by BWY on 2018/1/2.
 */
var express = require('express');
var router = express.Router();

var data_service = require('../app/mock/service.json');
var data_industry = require('../app/mock/industry.json');
var data_customers = require('../app/mock/customers.json');
var data_capability = require('../app/mock/capability.json');
var data_product = require('../app/mock/product.json');

let subtype_map = {
    '': {
        'title': '宽连十方-创新型IT解决方案与服务提供商'
    },
    'capability':{
        'title': '核心能力丨宽连十方',
        'bgImg': 'capability/bgtop.png',
        'type': 'capability',
        'data': data_capability
    },
    'product': {
        'title': '产品服务丨宽连十方',
        'bgImg': 'product/bgtop.png',
        'type': 'product',
        'data': data_product
    },
    'customers': {
        'title': '合作客户丨宽连十方',
        'bgImg': 'customers/bgtop.png'
    },
    'contact': {
        'title': '联系我们丨宽连十方',
        'bgImg': 'contact/bgtop.png'
    }
};

router.get('/:subtype1',(req, res)=>{
    let subtype1 = req.params['subtype1'];
    if(!subtype1) subtype1='';
    res.render('second_page', subtype_map[subtype1])
});
/*
router.get('/industry/telecom', function(req, res) {
    console.log(111);
    res.render('second',{ title: '行业及解决方案-电信',type: 'industry_telecom',data: data_industry})
});
router.get('/industry', function(req, res) {
    console.log(111);
    res.render('second',{ title: '行业及解决方案',type: 'industry',data: data_industry})
});
// GET users listing.
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
*/
module.exports = router;