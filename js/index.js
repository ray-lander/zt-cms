require(['jquery', 'jquery-validate', 'bootstrap'], function ($) {

    // //二级菜单显示与隐藏效果   
    $(".child").parent().on("click", function () {
        //slide效果切换        
        $(this).children(".child").slideToggle().parent().siblings().children(".child").slideUp()
        $(this).children("a").children(".up").toggleClass("now")
        $(this).children("a").children(".down").toggleClass("now")
        $(this).children("a").children(".home").toggleClass("now")
    })
    //鼠标经过显示三级菜单
    $(".child > li").mouseenter(function () {
        $(this).children(".child_next").stop(true).fadeIn(100)
        $(this).addClass("now").siblings().removeClass("now")
    })
    $(".child li").mouseleave(function () {
        $(this).children(".child_next").stop(true).fadeOut(100)
    })
    $(".child_next").mouseenter(function () {
        $(this).stop(true).fadeIn(100)

    })
    $(".child_next").mouseleave(function () {
        $(this).stop(true).fadeOut(100)
    })

    //点击三级菜单动态添加tab栏
    $(".child_next > a").on("click", function () {
        console.log($(this).data("name"))
        //获取id
        var tabId = $(this).data(id)
        var id = tabId.id
        // console.log(id)
        
        //动态添加tab栏页面
        $(".tab_list ul").append('<li data-id="' + id + '"><a>' + this.text + '</a><a class="closeBtn">X</a></li>')
        $(".tab_content").append('<div class="main_content" data-id="' + id + '"><iframe width=100% onload="this.height=100" id="myiframe" scrolling="no" frameborder="0" src="' + $(this).data("name") + '.html' + '"></iframe></div>')

    })
    



})
       