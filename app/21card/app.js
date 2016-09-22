/**
 * 子模块入口
 * dlq
 */

var App = angular.module('card', []);

App.config(require('./router'));
App.factory('cardservice', require('./service'));
//卡池列表
App.controller('cardpoollist',require('./controllers/cardpoollist'));
//添加卡池信息
App.controller('addcardpool',require('./controllers/addcardpool'));
App.controller('addcard',require('./controllers/addcard'));
App.controller('deletecard',require('./controllers/deletecard'));
//释放卡池
App.controller('releasecard',require('./controllers/releasecard'));


module.exports = App;