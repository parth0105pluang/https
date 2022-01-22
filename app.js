const http = require('http');
const server = http.createServer((req,res)=>{
//console.log(req)
//res.write('Welcome to homepage')
//res.end()
if(req.url==='/')
{
    res.end('Homepage')
}
if(req.url==='/about')
{
    res.end('About')
}
})
server.listen(8000)