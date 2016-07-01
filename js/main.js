/**
 * Created by duxinqi on 6/27/2016.
 */

var getTopHtml = function(){
    $.get("top.html",function(data){
        $("#top").html(data);
    });
}

var getSidebarHtml = function() {
    $.get("sidebar.html", function (data) {
        $("#sidebar").html(data);
    });
}

$(document).ready(function(){
    getTopHtml();
    getSidebarHtml();
});