需要用到axios[^9.19.2]、dingtalk-jsapi[^2.9.14]、qs[^6.9.1]、typescript[^3.8.3]、rxjs[^6.5.2]</br>
需要用到webpack的import()动态加载模块。</br>
在babel.config.js中配置"retainLines": true，以便更加准确的再async中打断点;
```
module.exports = {
  env: {
    development: {
      sourceMaps: true,
      retainLines: true
    }
  },
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}

```
