/**
 * Created by BWY on 2018/1/2.
 */
$(function(){
    var $navbarCollapseCtn = $("#navbar-collapse-1");
    var activeItemClass = sessionStorage.getItem('activeItemClass') || '.nav-item-index';
    var pathname = window.location.pathname,
        pathmap = {
            '/': '.nav-item-index',
            '/second/service/solution': '.nav-item-service-ctn',
            '/second/service/product': '.nav-item-service-ctn',
            '/second/service/operate': '.nav-item-service-ctn',
            '/second/industry': '.nav-item-industry',
            '/second/customers': '.nav-item-customers',
            '/second/about': '.nav-item-about'
        };
    if(activeItemClass!==pathmap[pathname]) {
        activeItemClass = pathmap[pathname];
    }
    activeNavItem($navbarCollapseCtn,activeItemClass);
    function activeNavItem($ctn,activeClass) {
        $ctn.find(activeClass).addClass("active").siblings().removeClass("active");
        sessionStorage.setItem('activeItemClass',activeClass);
    }
    $navbarCollapseCtn.find(".nav-item").click(function(){
        var activeClass = $(this).data("active");
        // activeNavItem($navbarCollapseCtn,activeClass);
        sessionStorage.setItem('activeItemClass',activeClass);
    });
    $("a.navbar-brand").click(function(){
        sessionStorage.setItem('activeItemClass','.nav-item-index');
    })
});