/**
 * 子模块入口
 * dlq
 */

var App = angular.module('custservice', []);

App.config(require('./router'));
App.factory('custservice', require('./service'));

App.controller('userinfo',require('./controllers/userinfo'));
App.controller('cardA',require('./controllers/cardA'));
App.controller('editcardA',require('./controllers/editcardA'));
App.controller('cardB',require('./controllers/cardB'));
App.controller('infoticket',require('./controllers/infoticket'));
App.controller('edituserinfo',require('./controllers/edituserinfo'));
App.controller('createuserinfo',require('./controllers/createuserinfo'));
App.controller('redpackage',require('./controllers/redpackage'));
App.controller('userorderlist',require('./controllers/orderlist'));
App.controller('sendmessage',require('./controllers/sendmessage'));
App.controller('orderbacklist',require('./controllers/orderbacklist'));
App.controller('orderback',require('./controllers/orderback'));
App.controller('carduserinfo',require('./controllers/carduserinfo'));
App.controller('destoryticketrecord',require('./controllers/destoryticketrecord'));
App.controller('registercount',require('./controllers/registercount'));

App.controller('openlottery',require('./controllers/openlottery'));
//查看激活码
App.controller('activecode',require('./controllers/activecode'));



module.exports = App;