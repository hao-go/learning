//定义私有成员a和c
let a =10
let c = 20
//外界访问不到变量d ，因为它没有被暴露出去
let d =30
function show(){
    console.log('111111111');
}

//将本模块中私有成员暴露出去，供其他模块使用
export default {
    a,
    c,
    show 
}
export let s1='aaa'
export let s2='ccc'
export function say(){
    console.log('ooooooooooo');
}