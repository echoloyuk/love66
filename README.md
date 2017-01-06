# love66

2016-12-28日，我将这个项目送给了我的六宝宝，它记录着我们从开始到现在628天的故事和我的内心想法。
那天，随着她的“我愿意”，我成为天下最幸福的男人。

感谢66给了我机会，给了我勇气，给了我动力，给了我新的生活。

**该项目中的每一个字符都是我为她而写。希望我们幸福永远。**

![img](others/res.jpg)


[线上预览地址](http://www.himachi.cn:808/ilove66/)。请您使用Chrome浏览器打开。

注意，该项目没有做网络性能优化，所以您可能会在loading页面长期停留。
如遇进度条快要走完但是长期未动，请您**重新刷新**页面。（不要开启开发者模式，或保证开发者模式允许缓存）

------

## 关于项目

该项目是我进入新的工作环境后，学习Webpack、React、Redux的实践项目，在学习中，感谢我身边所有的朋友和同事对我提供的技术和创意的帮助。

about tech points:

- Webpack and Webpack dev server
- React and React-Redux
- JSX and ES6

## How to Install?

1. 您必须已经安装了Node环境和npm。[您可以在这里查看安装Node以及自带的npm](https://nodejs.org/zh-cn/)
2. `git clone`该项目
3. 控制台进入该项目根目录
4. 控制台执行`npm install`。如果您出现权限错误，请使用`sudo npm install`；
5. 控制台执行`npm run dev`，启动本地服务器。
6. 打开浏览器，输入`http://127.0.0.1:1314/`访问效果。

该项目处在改进阶段，目前只有dev模式，为了临时发布只在`webpack.config.js`加载了compress的插件，
如果您要调试代码，请去掉最后的`plugins`配置

您可以使用`npm run build`命令将代码压缩成发布版本

## 关于源码

项目的源码在`根目录/src`下，使用react-redux架构开发，但是未使用任何redux中间件。我会持续在未来优化和重构。

```
src
 |- action                   // redux的action部分
 |- components               // 所有UI组件
 |- mods                     // 外部公用组件，这里只有一个简陋的loader
 |- reducers                 // redux的reducer
 |- container.js             // 最外层容器，用于连接UI和state的外部容器
 |- container.less           // 外部容器的整体样式
 |- default-state.js         // 默认配置
```

## License

MIT

> 作者：马驰
> 送给：刘柳






