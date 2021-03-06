module.exports = function($scope, $state, cardpoollist, $uibModal,addcard,unusedcard,addcard,releasecard,canrelease,ITEMS_PERPAGE){
    $scope.delete = function(){
        $state.go('app.deletecard');
    }
    // 往卡池里添加卡
    $scope.add = function(poolcode){   
      //  $state.go('app.addcard', {'poolcode':poolcode});
        var modalInstance = $uibModal.open({
          template: require('../views/addcard.html'),
          controller: 'addcard',
          //size: 'lg',
          resolve: {
            // 把卡池编号传到下一个界面
            poolcode : function(){
                return poolcode;
            },
            addcard : function(){
                return addcard;
            },
            unusedcard : function(){
                return unusedcard;
            },
            addcard : function(){
                return addcard;
            }
          }
        });

        modalInstance.result.then(function () {

          //init();
          // $scope.search();
        }, function () {
           
          //$log.info('Modal dismissed at: ' + new Date());
        });
 
    }
    // 添加卡池
    $scope.addcardpool = function(){
        $state.go('app.addcardpool');
    }
    // 卡池详情
    $scope.release = function(poolcode) {   
        $state.go('app.releasecard', {'poolcode':poolcode});
    }
    // 释放卡
    $scope.relief = function(poolcode){
        //$state.go('app.relief', {'poolcode':poolcode});
        var modalInstance = $uibModal.open({
          template: require('../views/relief.html'),
          controller: 'relief',
          //size: 'lg',
          resolve: {
            // 把卡池编号传到下一个界面
            poolcode : function(){
                return poolcode;
            },
            releasecard : function(){
                return releasecard;
            },
            canrelease : function(){
                return canrelease;
            }
            
          }
        });

        modalInstance.result.then(function () {

          //init();
          // $scope.search();
        }, function () {
           
          //$log.info('Modal dismissed at: ' + new Date());
        });     
    }
    // 修改卡信息
    $scope.resivecardinfo = function(poolcode){
        $state.go('app.resivecardinfo', {'poolcode':poolcode});
    }
    // 修改卡池信息
    $scope.resivepoolinfo = function(poolcode, poolname,pooltype){
        $state.go('app.reviseinfo', {'poolcode':poolcode, 'poolname':poolname, 'pooltype':pooltype});
    }

    $scope.cardpoollists = [];
    $scope.searchform = {};
    
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.getlist = function(){ 
    	var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        cardpoollist.save(para, function(res){ 
        	console.log(para);
            if (res.errcode !== 0) {
                alert(res.errmsg);
	        } else {
		        $scope.cardpoollists = res.data.results;
		        $scope.bigTotalItems = res.data.totalRecord;
		        console.log(res.data);
	        }
        });
    };	
    $scope.getlist();  
};