/**
 * Created by BWY on 2018/1/2.
 */
$(function(){
    $("#navbar-collapse-1 li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});