const http = require('http');

const server = http.createServer((req, res) => {
    // console.log("Piyush")
    // console.log(req)

    if(req.url == '/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
    }
    else if(req.url == '/about'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Welcome to about us page</h1></body>');
        res.write('</html>');
        res.end();
    }
    else if(req.url == '/node'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Welcome to my Node js project</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(3000)