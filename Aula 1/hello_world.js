
var http = require('http');
var server = http.createServer(function (req, res) {
    var categoria = req.url
    switch (categoria) {
        case '/moda':
            res.end("<html><body>Portal de moda</body></html>")
            break;
        case '/tecnologia':
            res.end("<html><body>Portal de tecnologia</body></html>")
            break;
        default:
            res.end("<html><body>Portal de default</body></html>")
    }
});
server.listen(3000);