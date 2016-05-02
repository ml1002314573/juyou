/**
 * 子模块路由
 * djp
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.userinfo', {
        url: '/userinfo',
        controller : 'userinfo',
        template: require('./user/userinfo.html'),
        resolve:{
            userinfo : function(custservice){
                return custservice.userinfo();
            }
        }
      })

      .state('app.edituserinfo', {
        url: '/edituserinfo/:mobile',
        controller : 'edituserinfo',
        template: require('./user/edituserinfo.html'),
        resolve:{
            edituserinfo : function(custservice){
                return custservice.edituserinfo();
            },
            oneuserinfo : function(custservice){
                return custservice.oneuserinfo();
            }
        }
      })

      .state('app.cardA', {
        url: '/cardA',
        controller : 'cardA',
        template: require('./user/cardA.html'),
        resolve:{
            cardA : function(custservice){
                return custservice.cardA();
            }
        }
      })

      .state('app.cardB', {
        url: '/cardB',
        controller : 'cardB',
        template: require('./user/cardB.html'),
        resolve:{
            cardB : function(custservice){
                return custservice.cardB();
            }
        }
      })

      .state('app.infoticket', {
        url: '/infoticket',
        controller : 'infoticket',
        template: require('./user/infoticket.html'),
        resolve:{
            infoticket : function(custservice){
                return custservice.infoticket();
            }
        }
      })

      .state('app.redpackage', {
        url: '/redpackage',
        controller : 'redpackage',
        template: require('./user/redpackage.html'),
        resolve:{
            redpackage : function(custservice){
                return custservice.redpackage();
            }
        }
      })

      

      


};

module.exports = router;