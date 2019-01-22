express = require('express');
var app = express();
var path = require('path');

const sslEndpoint = function (req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect(`https://${req.headers.host}${req.path}`)

	}else {
		next();
	}	

}

app.use( express.static(path.join(__dirname, 'build') ) );
app.use(sslEndpoint);


app.listen(8080);