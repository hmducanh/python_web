var http = require("http");
var fs = require("fs");

http.createServer(function(req, res)
{
	res.writeHead(200, {"Content-Type":"application/json"});
	var obj =
	{
		ho : "Hoang",
		ten : "Anh",
		namsinh : 2000
	};
	res.end( JSON.stringify(obj) );
}
).listen(7777);