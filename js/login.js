

$(function(){


  //调节iframe高度自适应
  // function setIframeHeight(iframe) {
  //   if (iframe) {
  //   var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
  //   if (iframeWin.document.body) {
  //   iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
  //   }
  //   }
  //   };
    
  //   window.onload = function () {
  //   setIframeHeight(document.getElementById('external-frame'));
  //   };
  
    // 提示框方法
    function showTips( content ) {
      $('.tips > p').text( content ).stop(true).fadeIn(100)
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
        console.log(password)
        
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

  








// require(['jquery','bootstrap-validator','bootstrap'], function($) { 

//   // 提示框方法
// function showTips( content ) {
//   $('.tips > p').text( content ).stop(true).fadeIn(100)
// }

//   //判断点击登录按钮
//   $(document).on("click",".loginBt",function(){
//       var username = $('#username').val().trim();       
//       if ( username === "" ) {
//         // 提示用户名不能为空
//         showTips( "用户名不能为空" )
//         return
//       }

//       //判断密码
//       var password = $("#password").val().trim();
//       if( password === ""){
//         showTips("用户密码不能为空")
//         return
//       }
      
//       //判断验证码
//       var checkcode = $("#checkcode").val().trim();
//       if(checkcode === ""){
//         showTips("请输入验证码")
//         return
//       }
      
//       var reg =  /^[a-zA-Z]\w{5,17}$/
//           if(!reg.test(checkcode)){
//             showTips("密码长度在6~18之间")
//             return
//           }

      
//       $.post(ctx+"/login",{name:$("input[name='username']").val(),password:$("input[name='password']").val()},function(data){
//           if(data.result=="success"){ 
//             location.href=ctx+"/index.html";
//           }
//       })

//   })

// })

