import $ from 'jquery'
import'./css/1.css'//webpack会检查有没有css的加载器来帮助打包css文件，没有的话会报错，故需要安装处理css文件的loader
//这句属于Es6的模块化语法，浏览器对其兼容性并不是很好，所以html里引用这个文件不起作用，故需要webpack将其打包，让html文件引用打包后的文件main.js
$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor','lightblue')
})