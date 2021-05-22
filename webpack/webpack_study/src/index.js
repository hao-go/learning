import $ from 'jquery'
//这句属于Es6的模块化语法，浏览器对其兼容性并不是很好，所以html里引用这个文件不起作用，故需要webpack将其打包，让html文件引用打包后的文件main.js
$(function(){
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor','lightblue')
})