const path = require("path");

//1.导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
//2.创建对象
const htmlPlugin = new HtmlWebpackPlugin({
    //指定复制哪个文件（设置生成预览页面的模板文件）
    template:"./src/index.html",
    //设置生成的预览页面名称
    filename:"index.html"

})
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
    },
    plugins:[ htmlPlugin ],//定义一个数组，把刚定义的对象加进去，

    module:{
        rules:[
            {
                //test设置需要匹配的文件类型，支持正则
                test:/\.css$/,
                //use表示该文件类型需要调用的loader
                use:['style-loader','css-loader','postcss-loader']//loader 的书写顺序，依据调用顺序判断

            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                //limit用来设置字节数，只有小于limit值的图片，才会转换
                //为base64图片
                use:"url-loader?limit=16940"
            }

        ]
    }


};