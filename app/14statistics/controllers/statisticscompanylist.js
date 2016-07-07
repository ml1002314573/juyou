module.exports = function($scope, getDate, orderstatisticscompanylist, ITEMS_PERPAGE, orderstatisticscompanyhistorylist){

    $scope.searchform = {};

    $scope.searchform.seltype = '0';

    $scope.total = {
        'buy' : 0,
        'used' : 0,
        'back' : 0,
        'total' : 0
    };

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    /* 分页
     * ========================================= */
    // $scope.maxSize = 5;            //最多显示多少个按钮
    // $scope.bigCurrentPage = 1;      //当前页码
    // $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.load = function () {

    	var fun;

    	if($scope.searchform.seltype == 0){
    		fun = orderstatisticscompanylist;
    	}else{
    		fun = orderstatisticscompanyhistorylist;
    	}
        
        var para = {
            //pageNo:$scope.bigCurrentPage, 
            //pageSize:$scope.itemsPerPage,
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };

        para = angular.extend($scope.searchform, para);

        console.log(para);
        
        fun.save(para, function(res){

            console.log(res);

            $scope.total = {
                'buy' : 0,
                'used' : 0,
                'back' : 0,
                'total' : 0
            };

            if(res.errcode === 0)
            {
                for(var i = 0, j = res.data.length; i < j; i++)
                {
                    $scope.total.buy += parseInt(res.data[i].buy);
                    $scope.total.used += parseInt(res.data[i].used);
                    $scope.total.back += parseInt(res.data[i].back);
                    $scope.total.total += parseInt(res.data[i].total_buy - res.data[i].total_back);
                }
                $scope.objs = res.data;
                //$scope.bigTotalItems = res.data.totalRecord;
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
    $scope.load();

    
    

};