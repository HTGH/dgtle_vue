//加载菜单部分
function loadPhonelist(a){
    var span1=$(a).children()[0].innerHTML;
    var span2=$(a).children()[1].innerHTML;
    console.log(span1);
    console.log(span2);
    $.ajax({
        url: "http://localhost:3000/shanyhs/phonelist",
        type: "get",
        data: {span1,span2},
        dataType: "json",
        success: function (data) {
            var html= "";
            //加载first名称
            html+=`<div class="content-item-first">
                            <div class="left">
                                <span>${span1}</span>
                            </div>
                            <ul class="right">`

            //加载first列表信息
            for(var{img,fname} of data.name1){
                html += `<li class="content-right-item">
                        <div class="img-wrapper">
                            <img src=${img}>
                        </div>
                        <span>${fname}</span>
                    </li>`
            }
            html+=`<li class="content-right-item">
                        <span>更多</span>
                    </li></ul></div>`

            //加载two名称
            html+=`<div class="content-item-two">
                            <div class="left">
                                <span>${span2}</span>
                            </div>
                            <ul class="right">`

            //加载two列表信息
            for(var{img,fname} of data.name2){
                html += `<li class="content-right-item">
                        <div class="img-wrapper">
                            <img src=${img}>
                        </div>
                        <span>${fname}</span>
                    </li>`
            }
            html+=`<li class="content-right-item">
                        <span>更多</span>
                    </li></ul></div>`

            $(a).children(".content-item").html(html);
        }
    })}
$(function(){
    //加载分页部分
    function loadPage(kw,pno=0) {
        // if(location.search.indexOf("kw=")!=-1){
        $.ajax({
            url: "http://localhost:3000/shanyhs/pno",
            type: "get",
            data: {kw,pno},
            dataType: "json",
            success: function (data) {
                var {pno,pageCount,phones}=data;
                var html = "";
                for (var {image,name,price} of phones) {
                    html += `
            <li class="hot-phone-card">
              <div class="el-card">
                <div class="el-card__body" style="height: 320px; width: 232px; box-sizing: border-box; text-align: center; padding: 36px 0px 0px;">
                <div class="img-box">
                <img src="${image}">
                </div>
                <div class="text">
                <p class="first-phone-name">${name}</p>
                <p class="second-price">最高回收价：<span>¥${price}</span></p>
               </div>
              </div>
              </div>
            </li>
            `
            }
                $("#phone-list").html(html);
                var html=`<li class="page-item"><a class="page-link bg-transparent" href="#">上一页</a></li>`;
                for(var i=1;i<=pageCount;i++){
                    html+=`<li class="page-item ${pno==i-1?'active':''}"><a class="page-link ${pno!=i-1?'bg-transparent':'border'}" href="#">${i}</a></li>`;
                }
                html+=`<li class="page-item"><a class="page-link bg-transparent" href="#">下一页</a></li>`;
                var $page=$(".pagination")
                $page.html(html);
                if(pno==0)
                    $page.children(":first").addClass("disabled")
                if(pno==pageCount-1)
                    $page.children(":last").addClass("disabled")
            }
        })
}
    loadPage();
    $("#mysearch").click(function(){
        var kw=$("#mysearch").prev().val();
        loadPage(kw,pno=0);
    })
    $("#mysearch").prev().keyup(function(e){
        if(e.keyCode==13)
            $("#mysearch").click()
    })
    $(".pagination").on("click","a",function(e){
        e.preventDefault();
        var $a=$(this);
        if(!$a.parent().is(".disabled,.active")){
            var kw=$("#mysearch").prev().val();
            if($a.html()=="上一页"){
                var pno=$(".active").find("a").html()-2;
            }else if($a.html()=="下一页"){
                var pno=$(".active").find("a").html();
            }else{
                var pno=$a.html()-1;
            }
            loadPage(kw,pno);
        }
    })
})
//菜单栏鼠标经过动态加载功能
$(".content-list-brand").hover(
    function(){
        $(this).children(".content-item").show();
        loadPhonelist(this);
    },
    function(){
        $(this).children(".content-item").hide()
    }
)
//测试: http://localhost:3000/index.html->F12
//结果:[{},{},{},{},{},{}]