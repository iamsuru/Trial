const fs = require('fs')

function readFile(){
    try {
        const htmlContent = fs.readFileSync('form.html', 'utf8');
        return htmlContent;
    } catch (error) {
        console.error('Error reading HTML file:', error);
        return null;
    }
}

module.exports={
    readFile:readFile
}


/*
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const form_html = require('./openformpage')

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, html) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Index page not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(html);
            }
        });
    } else if (req.url === '/login' && req.method === 'POST') {
        doLogin(req, res, (success) => {
            if (success) {
                res.writeHead(302,{'Location':'/form'})
            } else {
                res.writeHead(401, { 'Content-Type': 'text/plain' });
                res.end('Invalid username or password');
            }
        });

    }
    else if(req.url==='/form'){
        const form = form_html.readFile()
        if(form){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(form)
        }
    }
     else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
}).listen(8000);

function doLogin(req, res, callback) {
    let data = '';

    req.on('data', (chunk) => {
        data += chunk.toString();
    });

    req.on('end', () => {
        const formData = queryString.parse(data);
        const username = formData.username;
        const password = formData.password;
        if (username === 'user' && password === 'pass') {
            callback(true);
        } else {
            callback(false);
        }
    });
}


*/