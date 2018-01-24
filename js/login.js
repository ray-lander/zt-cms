
require(['jquery', 'jquery-validate', 'bootstrap'], function ($) {
 
    // 提示框方法
    function showTips( content ) {
      $('.tips >p ').text( content ).stop(true).fadeIn(100)      
      $('.tips > img').stop(true).fadeIn(100)
    }
   
    //判断点击登录按钮
    $(".loginBt").on("click", function(){
      var username = $("input[name='username']").val().trim();       
        if ( username === "" ) {
        // 提示用户名不能为空
        showTips( "用户名不能为空" )
        return
        }

        //判断密码
        var password = $("input[name='password']").val().trim();
        if( password === ""){
          showTips("用户密码不能为空")
          return
        }        
        
        var reg = /^\d{6,18}$/
        if(!reg.test(password)){
          showTips("密码长度在6~18之间")
          return
        }   

        //判断验证码
        var checkcode = $("input[name='checkcode']").val().trim();
        if(checkcode === ""){
          showTips("请输入验证码")
          return
        }   
        
          //发送ajax请求
          $.ajax({
            type: "get",
            url: "/login",
            data: {
              name:$("input[name = 'username']").val(),
              password:$("input[name = 'password']").val()
            },
            success: function(data){
              if(data.success){
                location.href = ctx+"/index.html"
              }
            }
          })  
    })
})

  

