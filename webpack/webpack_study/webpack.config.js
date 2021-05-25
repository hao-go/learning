const path = require("path");


module.exports={//通过这种方式向外暴露一个配置项
    
    //编译模式
    mode:"development",//可以设置为development(开发模式)，production(发布模式),但是这个没起作用
    //设置入口文件路径
    entry: path.join(__dirname,"./src/index.js"),
    //设置出口文件
    output:{
        //设置路径
        path:path.join(__dirname,"./dist"),
        //设置文件名
        filename:"bundle.js"
    }


};