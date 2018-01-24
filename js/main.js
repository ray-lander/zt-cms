
    require.config({
        baseUrl: './js',
        paths: {          
          'bootstrap': './lib/bootstrap/js/bootstrap',
          'jquery': './lib/jquery/jquery.min' , 
          'jquery-validate': './lib/jquery-validation/jquery.validate.min',           
          'layui': './lib/layui/layui',       
          'login': './login',
          'index': './index',
          'waybill': './waybill'          
        },
        shim:{
          'bootstrap': {
            deps: ['jquery']
          },
          'jquery-validate': {
            deps: ['jquery']
          },     
          
          'layui': {
            deps:['jquery']
          }, 

          'login':{
            deps:['jquery']
          },
          'index':{
            deps:['jquery']
          },
          'waybill':{
            deps:['jquery']
          }
        }
      })

      require(
        ['jquery','bootstrap','jquery-validate','layui','login','index','waybill'],
       function($, bootstrap, jqueryValidate, layui, login, index, waybill ) {
        
       })
     
      
     
      

