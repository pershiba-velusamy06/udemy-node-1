// const fs = require('fs')

// fs.writeFileSync('hello.txt',"hello from node")

// console.log("hello from nodejs")

const http = require('http')
const RequestResponseFun = require('./routes')

const server = http.createServer(RequestResponseFun)

server.listen(3000)