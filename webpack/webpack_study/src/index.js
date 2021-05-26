import $ from 'jquery'
import'./css/1.css'//webpack会检查有没有css的加载器来帮助打包css文件，没有的话会报错，故需要安装处理css文件的loader
import './css/1.less'
import './css/1.scss'


//这句属于Es6的模块化语法，浏览器对其兼容性并不是很好，所以html里引用这个文件不起作用，故需要webpack将其打包，让html文件引用打包后的文件main.js
$(function(){
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor','lightblue')
}) 

class Person{
    static info ='aaaaaaaa'
}

console.log(Person.info);

//--------------------------------------------------------\
import Vue from 'vue'

//导入单文件组件
import App from './components/App.vue'//也需要配置对应的loader

const vm = new Vue({
    el:'#app',//提供一个el控制区域（此处通过id指定）
    render:h=>h(App)   ,//通过render函数，把指定的组件渲染到el区域中
})