

  console.log(8888)
    require.config({
        baseUrl: 'js/',
        paths: {          
          'bootstrap': './lib/bootstrap/js/bootstrap',
          'jquery': './lib/jquery/jquery.min' , 
          'bootstrap-validator': './lib/bootstrap-validator/js/bootstrapValidator',          
          'nprogress': './lib/nprogress/nprogress',          
          'echarts': './lib/echarts/echarts.min',          
          'rem' : './rem',
          'login': './login'          
        },
        shim:{
          'bootstrap': {
            deps: ['jquery']
          },
          'bootstrap-validator':{
            deps:['jquery']
          },          
          'nprogress': {
            deps:['jquery']
          },
          'echarts':{
            deps:['jquery']
          },
          
          'rem': {
            deps: ['jquery']
          },
          'login':{
            deps:['jquery']
          }
        }
      })

      require(
        ['jquery','bootstrap','bootstrap-validator','nprogress','echarts','rem','login'],
       function($, bootstrap, bootstrapValidator, nprogress, echarts, rem, login ) {
        console.log(1111)
       })
     
      
     
      

