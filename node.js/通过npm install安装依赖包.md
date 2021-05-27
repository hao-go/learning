# 通过npm install安装依赖包

1.使用命令

```
npm install(npm i)
```

 安装package.json文件中的依赖包node_modules；

（install init 会生成package.json文件，有些框架初始化过程也会生成package.json文件。）

安装单独的依赖包时，`npm install <packageName>` 





- **--save 等同于-S （常用，可保存在package.json文件中）**

  -S, --save 安装包信息将加入到dependencies（生产阶段的依赖,也就是项目运行时的依赖，就是程序上线后仍然需要依赖）

- **--save-dev 等同于 -D**

  -D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖，就是我们在开发过程中需要的依赖，只在开发阶段起作用。）

  **区别:**
  在用npm install 单独安装 npm 包时，有两种命令参数可以把它们的信息写入 package.json 文件，

  一个是npm install–save,另一个是 npm install –save-dev，他们表面上的区别是：
  –save 会把依赖包名称添加到 package.json 文件 dependencies 下，
  –save-dev 则添加到 package.json 文件 devDependencies下 ，譬如：

  ```
  {
  	"dependencies": {
  		 "@ant-design/pro-layout": "^4.5.0",
  	    "@antv/data-set": "^0.10.2",
  	    "antd": "^3.19.1",
  	},
  	"devDependencies": {
  		"babel-core": "^6.0.0",
  		"babel-loader": "^6.0.0",
  		"babel-preset-latest": "^6.0.0",
  		"cross-env": "^3.0.0",
  		"css-loader": "^0.25.0",
  		"file-loader": "^0.9.0",
  		"vue-loader": "^11.1.4",
  		"vue-template-compiler": "^2.2.1",
  		"webpack": "^2.2.0",
  		"webpack-dev-server": "^2.2.0"
  	}
  }
  
  ```

  不过这只是它们的表面区别。**它们真正的区别是**：
  dependencies是**运行**时的依赖，
  devDependencies是**开发时**的依赖。
  即devDependencies 下列出的模块，是我们开发时用的，比如 我们安装 js的压缩包gulp-uglify 时，我们采用的是 “npm install –save-dev gulp-uglify ”命令安装， 因为我们在发布后用不到它，而只是在我们开发才用到它。

  ##### 举例：

  像jQuery库或者Angular框架类似的，我们在开发完后后肯定还要依赖它们，否则就运行不了，这是dependencies;
  而写 ES6 代码，需要babel转换成es5，转换完成后，我们只需要转换后的代码，上线的时候，直接把转换后的代码部署上线，不需要bebal了，上线了不需要，这就是devDependencies。
  而如果用了 jQuery，由于发布之后还是依赖jQuery，所以是dependencies。

  **补充：**

  正常使用npm install时，会下载dependencies和devDependencies中的模块，当使用npm install –production或者注明NODE_ENV变量值为production时，只会下载dependencies中的模块。 

**npm安装指定版本的依赖,例如**：

```
npm install --save  react-router@2.8.1
// 2.8.1是指定的版本号
```



**删除模块**
npm uninstall 模块

删除本地模块时你应该思考的问题：是否将在package.json上的相应依赖信息也消除？
　　

```
npm uninstall 模块：删除模块，但不删除模块留在package.json中的对应信息
npm uninstall 模块 --save 删除模块，同时删除模块留在package.json中dependencies下的对应信息
npm uninstall 模块 --save-dev 删除模块，同时删除模块留在package.json中devDependencies下的对应
```






2.你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

$ npm install -g cnpm --registry=https://registry.npm.taobao.org）

**NPM：**

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。
由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。


