/**
 * Created by web on 2018/9/13.
 */
$(function(){
    $(`<link rel="stylesheet" href="css/header.css"/>`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success: function(res) {
            $(res).replaceAll("#header")
        }
    })
})
$("#lingdang").hover(
    function(){$(".lingdang-text").toggleClass("d-none")}
)
$("#photo").hover(
    function(){$(".photo-text").toggleClass("d-none")}
)
