const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
const form_html = require('./openformpage')
const login_html = require('./loginpage')

http.createServer((req, res) => {

    if (req.url === '/') {


        const form = login_html.readFile()
        if(form){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(form)
        }


    }
    else if(req.url==='/login' && req.method==='POST'){
        doLogin(req,(success)=>{
            if(success){
                res.writeHead(302,{'Location':'/form'})
                res.end()
            }
            else{
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Invalid details');
            }
        })
    }

    else if(req.url=== '/form'){
        const form = form_html.readFile()
        if(form){
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(form)
        }
        else{
            res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
        }
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
}).listen(8000);












function doLogin(req, callback) {
    
        let data = ''

        req.on('data',(chunk)=>{
            data+=chunk.toString()
        })

        req.on('end',()=>{
            const formData = queryString.parse(data)
            const user = formData.username
            const pass = formData.password

            if(user==='user' && pass==='pass'){
                callback(true)
            }
            else{
                callback(false)
            }
        })
}


