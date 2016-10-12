/**
*卡订单详情
*ml
*/

module.exports = function($scope, $stateParams, getUserInfoByMobile,getProductByCardNoList,createProductOrderByCardNo){

    var cardno;
	var card_password;
	var product_code;
	$scope.card_product = {};
	// var card_product ;
    $scope.creat = function(index){
    	if (index<card_product.length&&index>=0) {
    		product_code = index;
    	}
	};


			


	$scope.searchuser_info = function(mobile){

		//验证手机号
		if(!(/^1[34578]\d{9}$/.test(mobile))){ 
        alert("手机号码有误，请重填");  
        return ; 
   		};
		getUserInfoByMobile.save({'mobile' : mobile}, function(res){
			console.log(mobile);
			console.log(res);
			console.log(mobile);
		    if (res.errcode !== 0) {
	           alert(res.errmsg);
	           return;
		    }
		    $scope.user_info = res.data;
	 	}); 

	};


	$scope.searchcard_product = function(card_num){

		//验证卡号
		// if(!(/\b\d{12}\b/.test(card_num))){ 
  //       alert("卡号有误，请重填");  
  //       return ; 
  //  		};
		getProductByCardNoList.save({'card_num' : card_num}, function(res){
			console.log(card_num);
			console.log(res);
			console.log(card_num);
		    if (res.errcode !== 0) {
	           alert(res.errmsg);
	           return;
		    }
		    $scope.card_product = res.data;
		    console.log($scope.card_product[0]);
	 	}); 

	};


	$scope.active_product = function(userid,cardno,card_password){

		console.log(userid);
		console.log(cardno);
		console.log(card_password);
		console.log(product_code);
		createProductOrderByCardNo.save({'userid':userid,'cardno':cardno,'card_password':card_password,'product_code':product_code},function(res){
			console.log(res);
			if (res.errcode !== 0) {
	           alert(res.errmsg);
	           return;
		    }else{
		    	alert("激活成功");
		    	return;
		    }
		});
	};
	
};