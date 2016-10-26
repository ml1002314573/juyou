module.exports = function($scope, $state, $stateParams, batchnumber){
 $scope.cardinfo = { 
 	'cardnum' : '',
 	'startcard' : '',
 	'endcard' : '',
 	'cardstatu' : '0'
 };
 

 var mincard = $stateParams.mincard;
 var maxcard = $stateParams.maxcard;
 console.log(mincard);
 console.log(maxcard);
 $scope.cardnuminfo = { 
 	'scard' : mincard,
 	'ecard' : maxcard,
 	'sumcard' : ''
 };
 

 console.log($scope.cardnuminfo);
 $scope.setbatch = function(){ 
 	var cardparem = {'cardstatu':$scope.cardinfo.cardstatu};
 	if ($scope.cardinfo.cardstatu === '0') {
        	cardparem['cardnum'] = $scope.cardinfo.cardnum;
        } else if ($scope.cardinfo.cardstatu === '1'){
        	cardparem['startcard'] = $scope.cardinfo.startcard;
        	cardparem['endcard'] = $scope.cardinfo.endcard;
        } else {
        	alert('参数错误');
        }

        //console.log(cardparem);
     if ((cardparem.cardnum >= mincard && cardparem.cardnum<=maxcard) ||(cardparem.startcard>=mincard && cardparem.startcard<=maxcard && cardparem.endcard>=mincard && cardparem.endcard<=maxcard) ) { 
  	    batchnumber.save(cardparem, function(res){
			if (res.errcode !== 0) {
              alert(res.errmsg);
              return;
			} else {
			  alert('批次号设置成功');
			  $state.go('app.basecardlist');
			  return;
			       }
    });     
  	} else { 
  		alert('卡号不在可填卡号范围内');
  		return;
  	}
 	
 };

};