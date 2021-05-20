var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic('./static')).listen(5050, function(){
	console.log('Server running on 5050...');
    });
