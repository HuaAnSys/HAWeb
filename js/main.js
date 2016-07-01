/**
 * Created by duxinqi on 6/27/2016.
 */

//var getTopHtml = function(){
//    $.get("top.html",function(data){
//        $("#top").html(data);
//    });
//}
//
//var getSidebarHtml = function() {
//    $.get("sidebar.html", function (data) {
//        $("#sidebar").html(data);
//    });
//}

function addTopAndSider(){
    $('#top').html('<div class="navbar"><div class="navbar-inner"><ul class="nav pull-right"><li id="fat-menu" class="dropdown"><a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-user"></i> 管理员<i class="icon-caret-down"></i></a><ul class="dropdown-menu"><li class="divider visible-phone"></li><li><a tabindex="-1" href="sign-in.html">退出</a></li></ul></li></ul><a class="brand" href="index.html"><span class="first">Your</span> <span class="second">Company</span></a></div></div>');
    $('#sidebar').html('<div class="sidebar-nav"><a href="#user-menu" class="nav-header" data-toggle="collapse">业主管理</a><ul id="user-menu" class="nav nav-list collapse in"><li><a href="index.html">用户列表</a></li><li ><a href="user.html">增加用户</a></li></ul><a href="#community-menu" class="nav-header" data-toggle="collapse">社区管理</a><ul id="community-menu" class="nav nav-list collapse"><li><a href="communityList.html">社区公告</a></li><li ><a href="notice.html">增加公告</a></li></ul><a href="#property-menu" class="nav-header collapsed" data-toggle="collapse">物业管理</a><ul id="property-menu" class="nav nav-list collapse"><li><a href="payment.html">缴费记录</a></li><li ><a href="repairs.html">报修记录</a></li><li><a href="housing.html">房屋租售</a></li><li ><a href="complain.html">投诉记录</a></li></ul><a href="#shopping-menu" class="nav-header" data-toggle="collapse">商城管理</a><ul id="shopping-menu" class="nav nav-list collapse"><li><a href="productList.html">商品列表</a></li><li ><a href="product.html">增加商品</a></li></ul><a href="#domestic-menu" class="nav-header" data-toggle="collapse">家政管理</a><ul id="domestic-menu" class="nav nav-list collapse"><li><a href="domesticList.html">家政列表</a></li><li ><a href="domestic.html">增加服务</a></li></ul></div>');
}

$(document).ready(function(){

});