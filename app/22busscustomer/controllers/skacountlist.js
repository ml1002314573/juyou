module.exports = function($scope, $stateParams,customerlist,review, $uibModal,role,create,message,userinfo,insertnops,failed,confirmauthority){
    // 获取用户信息
    userinfo.save({}, function(res){ 
    	console.log(res);
    	//console.log($scope.loginuser);
    	$scope.loginuser = res;
    });
    

  
	// 获取申请人列表
	$scope.getlist = function(){ 
	 customerlist.save({}, function(res){ 
      if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	} else { 
          $scope.objs = res.data;
          console.log($scope.objs);

          return;
    	}
	 });
    };
    $scope.getlist();
	// 通过
	$scope.pass = function(id,ticket_id){ 
		//console.log(id);
        //利用对话框返回的值 （true 或者 false）  
        if (confirm("你确定要通过吗?")) {
                review.save({'id' : id}, function(res){ 
	                if (res.errcode !== 0) { 
    		            alert(res.errmsg);
    	            } else { 
                        $scope.objss = res.data;
                        console.log($scope.objss);
                        $scope.getlist();     
    	            }
	            });
            
        } else {  
            console.log("点击了取消");  
        }  	
	};

	// 拒绝
	$scope.refuse = function(id){ 
      if (confirm("你确定要拒绝吗?")) {
        failed.save({'id' : id}, function(res){ 
        if (res.errcode !== 0) { 
          alert(res.errmsg);
          return;
        }  
        $scope.getlist();
        }); 
	  } else { 
	  	 console.log("点击了取消");
	  }
      
	};

	// 分配权限
	$scope.assignauthority = function(){
	    confirmauthority.save({'appid' : 'shangke'},function(res){
	        if (res.errcode !== 0) { 
	        	alert(res.errmsg);
	        	return;
	        } 
	        alert('恭喜你，获取到权限！');
	        //$scope.getlist();
	    }); 
	};

	// 创建账号
	$scope.creataccount = function(id,company_id,company_code,office_id){ 
		//$scope.getlist();
		//alert('创建账号');
		var modalInstance = $uibModal.open({
          template: require('../views/creataccount.html'),
          controller: 'creataccount',
          //size: 'lg',
          resolve: {
            role : function(){
                return role;
            },
            create : function(){
                return create;
            },
            message : function(){
                return message;
            },
            id : function(){
                return id;
            },
            company_id : function(){
                return company_id;
            },
            company_code : function(){
                return company_code;
            },
            office_id : function(){
                return office_id;
            },
            insertnops : function(){
                return insertnops;
            }
            
          }
        });

        modalInstance.result.then(function () {
          alert('账号创建成功');
          //init();
         $scope.getlist();
        }, function () {
         //  $scope.getlist();
          //$log.info('Modal dismissed at: ' + new Date());
        });
     //  $scope.getlist();
	};
    
    // 发送短信
    $scope.sendmessage = function(id){ 
    	console.log(id);
    	//alert('faduanxin');
    	message.save({'id':id}, function(res){ 
             //  console.log({'id':id});
             //  console.log(res);
               if (res.errcode !== 0) { 
               	alert(res.errmsg);
               	return;
               } 
               	alert('发送短信验证码成功');

               

            });
    };


    // 搜索申请人
    $scope.searchform = {};
    $scope.searchuser = function(){ 
    	//alert('shenqing');
    	customerlist.save($scope.searchform, function(res){ 
    		console.log($scope.searchform);
        if (res.errcode !== 0) { 
    		alert(res.errmsg);
    		return;
    	} 
          $scope.objs = res.data;
          console.log($scope.objs);
          
    	
	 });
    };

};