module.exports = function($scope, $state, goodscreate, viewlist, typelist, attrlistsel){

	$scope.goodsobj = {};
    $scope.goodsobj.id = '';
	$scope.goodsobj.state = 0;
    $scope.goodsobj.cost_price = 0;

	//基本信息 景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        	$scope.goodsobj.place_code=$scope.viewarr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    //详细信息 票种属性下拉
	attrlistsel().then(function(res) {
		console.log(res);
        if(res.errcode === 0)
        {
        	$scope.tktarr = res.data;
        	$scope.goodsobj.attr = $scope.tktarr[0].ticket_attr_id;
        	//console.log($scope.goodsobj.ticketattr);
        }
        else
        {
            alert(res.errmsg);
        }
    });

    //基本信息 保存
	$scope.goodsgo = function(){
		$scope.goodsobj.cost_price *= 100;
		console.log($scope.goodsobj);
		goodscreate.save($scope.goodsobj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$state.go('app.editgoods', {'id' : res.data.uuid});
			}
			else
			{
				alert(res.errmsg);
			}

		});
	};


	
};