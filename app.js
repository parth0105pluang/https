const http = require('http');
const server = http.createServer((req,res)=>{
console.log(req)
res.write('Welcome to homepage')
res.end()
})
server.listen(8000)