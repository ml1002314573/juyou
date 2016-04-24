/**
 * 子模块入口
 * dlq
 */

var App = angular.module('sale', []);

App.config(require('./router'));
App.factory('sellingservice', require('./service'));

App.controller('selling',require('./controllers/selling'));
App.controller('sellinggroup',require('./controllers/sellinggroup'));
App.controller('sellinggroupcreate',require('./controllers/sellinggroupcreate'));
App.controller('saledetail',require('./controllers/saledetail'));
// App.controller('doccreate',require('./controllers/module'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;