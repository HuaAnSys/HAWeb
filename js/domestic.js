/**
 * Created by duxinqi on 6/28/2016.
 */

var flag = 0;

var bb = function(event){
    console.log(event.data.flag);
    window.location.href="domestic.html?flag="+flag;
}
$(".new_dom_pro").bind('click',{'flag':flag},bb);

var getDomestic = function(currPage, limit, total){
    var showNum = limit;
    var html = [];
    var domesticList = [];
    var j = 0;

    $.ajax({
        type: 'get',
        url : '../js/Domestic.json',
        dataType:'json',
        cache:false,
        success: function(data) {
            console.log(data);
            domesticList = data.data;
            console.log(domesticList);
            if (total - (currPage * limit) < 0) showNum = total - ((currPage - 1) * limit);
            $("#mainContent").empty();
            $("#mainContent").append(
                '<table id="domesticList" class="table"><thead><tr id="title"> <th>#</th> <th>商家名称</th> <th>地址</th> <th>电话</th> <th style="width: 26px;"></th></tr></thead><tbody>'
            );

            for (var i = (currPage - 1) * limit; i < (currPage - 1) * limit + 10; i++) {
                console.log(currPage);
                $("#domesticList").append(
                    "<tr>" + "<td>" + (i + 1) + "</td>"
                    + "<td>" + domesticList[i].comName + "</td>"
                    + "<td width='700px'>" + domesticList[i].comAddress + "</td>"
                    + "<td>" + domesticList[i].comTel + "</td>"
                    + "<td>" + "<a href='user.html'>" + "<i class='icon-pencil'>" + "</i>" + "</a>" + " <a href='#myModal' role='button' data-toggle='modal'>" + "<i class='icon-remove'>" + "</i>" + "</a>" + "</td>"
                    + "</tr>");
            }
            $("#mainContent").append('</tbody></table>');
        }
    });
}




function callBackPagination() {
    var totalCount, showCount = 10,
        limit = 10;

    $.ajax({
        type: 'get',
        url : '../js/Domestic.json',
        dataType:'json',
        success: function(data) {
            totalCount = data.data.length;
            getDomestic(1, limit, totalCount);
            console.log(totalCount);
            $('#callBackPager').extendPagination({
                totalCount: totalCount,
                showCount: showCount,
                limit: limit,
                callback: function (curr, limit, totalCount) {
                    getDomestic(curr, limit, totalCount);
                }
            });
        },
    });

}

$(document).ready(function(){
    callBackPagination();
})