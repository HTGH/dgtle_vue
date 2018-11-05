//登录注册弹出框
function alertMsg(msg) {
//遮罩层
    $(`<div class="styleStr" id="shadowDiv"></div>`).prependTo("body")
//弹出框
    $(`<div id="alertMsg"></div>`)
        .append($(`<p id="alertMsg_info"></p>`).html(msg))//创建弹出框里面的内容P标签
        .append($(`<a id="alertMsg_btn" href ="javascript:void(0)"></a>`).html('<cite>确定</cite>'))//创建按钮
        .appendTo("body")
    $("#alertMsg_btn").click(function () {
        $("#shadowDiv").remove();
        $("#alertMsg").remove();
        return true;
    });
}
