// 1.导入http模块

//2. 创建web服务器实例

// 3.为服务器实例绑定request事件、监听客户端的请求

//4. 启动服务器

const http = require('http')
const server =http.createServer()
server.on('request',(req,res)=>{
    //定义一个字符串，包含中文的内容
    const str = '您请求的URL 地址是${req.url},请求的method类型为${req.method}'
    //调用 res.setHeader()方法，设置Content-Type响应头，解决中文乱码问题
    res.setHeader('Content-Type ','text/html;charset=utf-8')
    //res.end()将内容响应给客户端
    res.end(str)
})
server.listen(80,()=>{
    console.log('server running at http://127.0.0.1');
})