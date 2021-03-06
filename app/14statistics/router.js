/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.uselist', {
        url: '/uselist',
        controller : 'uselist',
        template: require('./views/uselist.html'),
        //template: require('../99common/views/table.html'),
        resolve:{
            destoryDetail : function(statisticsservice){
                return statisticsservice.destoryDetail();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })



      .state('app.statisticsviewlist', {
        url: '/statisticsviewlist',
        controller : 'statisticsviewlist',
        template: require('./views/viewlist.html'),
        //template: require('../99common/views/table.html'),
        resolve:{
            viewdestorystatisticlist : function(statisticsservice){
                return statisticsservice.viewdestorystatisticlist();
            },
            viewdestorystatistichistorylist : function(statisticsservice){
                return statisticsservice.viewdestorystatistichistorylist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            govsubsidygoodscodelist : function(statisticsservice){
                return statisticsservice.govsubsidygoodscodelist();
            },
            useddetaillist : function(statisticsservice){
                return statisticsservice.useddetaillist();
            },
            grouplxslist : function(statisticsservice){
                return statisticsservice.grouplxslist();
            },
            DateDiff : function(utilservice){
                return utilservice.DateDiff;
            }
        }
        
      })



      .state('app.statisticssale', {
        url: '/statisticssale',
        controller : 'statisticssale',
        template: require('./views/statisticssale.html'),
        resolve:{
            orderstatisticslist : function(statisticsservice){
                return statisticsservice.orderstatisticslist();
            },
            orderstatisticshistorylist : function(statisticsservice){
                return statisticsservice.orderstatisticshistorylist();
            },
            orderstatisticsusedinfolist : function(statisticsservice){
                return statisticsservice.orderstatisticsusedinfolist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            DateDiff : function(utilservice){
                return utilservice.DateDiff;
            }
        }
        
      })



      .state('app.statisticscompanylist', {
        url: '/statisticscompanylist',
        controller : 'statisticscompanylist',
        template: require('./views/statisticscompanylist.html'),
        resolve:{
            orderstatisticscompanylist : function(statisticsservice){
                return statisticsservice.orderstatisticscompanylist();
            },
            orderstatisticscompanyhistorylist : function(statisticsservice){
                return statisticsservice.orderstatisticscompanyhistorylist();
            },
            orderstatisticsusedinfolist : function(statisticsservice){
                return statisticsservice.orderstatisticsusedinfolist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            DateDiff : function(utilservice){
                return utilservice.DateDiff;
            }
        }
        
      })

      .state('app.statisticsgrouplist', {
        url: '/statisticsgrouplist',
        controller : 'statisticsgrouplist',
        template: require('./views/statisticsgrouplist.html'),
        resolve:{
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            groupcountlist : function(statisticsservice){
                return statisticsservice.groupcountlist();
            }
        }
        
      })

      .state('app.statisticsgroupjqlist', {
        url: '/statisticsgroupjqlist',
        controller : 'statisticsgroupjqlist',
        template: require('./views/statisticsgrouplist.html'),
        resolve:{
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            groupcountjqlist : function(statisticsservice){
                return statisticsservice.groupcountjqlist();
            }
        }
        
      })



      .state('app.distributor', {
        url: '/distributor',
        controller : 'distributor',
        template: require('./views/distributor.html'),
        resolve:{
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            orderstatisticscompanyhistorylist : function(statisticsservice){
                return statisticsservice.orderstatisticscompanyhistorylist();
            },
            talist : function(depositservice){
                return depositservice.talist;
            }
        }
        
      })

      


};

module.exports = router;