/**用户名和密码的非空验证**/
$("#uname").blur(function () {
    if (!this.value) {
        $(".login_span1").show();
        return false;
    }
}).focus(function () {
    if (!this.value) {
        $(".login_span1").hide();
        return false;
    }
});

$("#upwd").blur(function () {
    if (!this.value) {
        $(".login_span2").show();
        return false;
    }
}).focus(function () {
    if (!this.value) {
        $(".login_span2").hide();
        return false;
    }
});

/**登录单击按钮事件监听**/
$('#bt-login').click(function () {
    var data = $('#form-login').serialize();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/login/signin',
        data: data,
        success: function (result) {
            if (result.code === 200) {              //登录成功
                var pageToJump = result.pageToJump?result.pageToJump:'http://localhost:3000/index.html';
                location.href = pageToJump;
            } else if (result.code === 201) {       //登录失败
                alertMsg('<b>登录失败！</b><p>原因：' + result.msg + '</p>');
            }
        }
    });
});


///***7天之内不再登录***/
//$(document).ready(function () {
//  if ($.cookie("rmbUser") == "true") {
//    $("#ck_rmbUser").attr("checked", true);
//    $("#username").val($.cookie("username"));
//    $("#password").val($.cookie("password"));
//  }
//});
////记住用户名密码
//function save() {
//  if ($("#ck_rmbUser").attr("checked")) {
//    var str_username = $("#username").val();
//    console.log(str_username);
//    var str_password = $("#password").val();
//    $.cookie("rmbUser", "true", {expires: 7}); //存储一个带7天期限的cookie
//    $.cookie("username", str_username, {expires: 7});
//    $.cookie("password", str_password, {expires: 7});
//  }
//  else {
//    $.cookie("rmbUser", "false", {expire: -1});
//    $.cookie("username", "", {expires: -1});
//    $.cookie("password", "", {expires: -1});
//  }
//}