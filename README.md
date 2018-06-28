# common-widgets
VT 公共组件库，基于vue开发、封装。适用于：
* HCI
* aCloud
* Docker
* VMP
aCloud使用webpack，需要进行少量兼容性处理。

相关：

- [hci改进计划与落实](http://gitlab.ued.io/sf-creative-group/hci-improve/tree/master)
- [组件在线使用文档](http://200.200.151.26/vt/docs/#/docs)

## 开发说明

### 组件目录
* 主要组件目录，参考现有的组件进行编写
    * sf-widget
        * packages
            * theme-default *（存放组件样式文件）*
                * col.css
                * row.css
                * ...
            * form *（form 组件）*
            * input *（输入框组件）*
            * ...
        * src
            * mixins
                * emitter.js *（事件mixin）*
                * form-field.js *（表单项mixin，包含验证等功能，表单组件需要配置该mixin）*
            * index.js *（组件入口，添加组件需要到此处注册）*

### 规范/注意事项
由于组件需要适用于VT各个产品线，所以各产品线、版本公共组件需要共同维护，VT切换到gitlab后，统一维护，定时合入新特性。在各个产品线或版本均可编写相同的代码，不需要考虑各个版本UI框架的功能差异。

* 如果vue组件有模板，需要为vue组件配置`template`属性，`template: ''`
* vue文件依赖，需要写文件后缀
* `sf-widget`目录禁止引用业务模块的内容
* aCloud和其他产品代码的模块`alias`必须保持统一，如`MessageBox`均定义为`msgBox`
* 组件需要配置`name`、`componentName`属性
* 组件名以`Sf`为前缀，如`SfForm`，`SfInput`
* 事件以命名空间的方式命名，如`sf.form.addField`
* 编写的组件必须有足够的注释与说明
* 新模块使用vue进行开发，不需要解析的大量html，可添加`v-pre`
* 禁止过多大量、直接操作vue模块data内的属性，有需要的应该抽象成方法，供内外部调用

关于jquery与vue混用：
* jquery模块与vue模块在调用上无多大区别，都是普通的模块。模块应该是内聚的对象，提供方法代外部调用
* 可在jquery模块内部调用vue模块
* 可在vue模块内部使用jquery模块，jquery模块必须提供简单的方法以供调用，禁止在vue模块内进行过多dom操作

### 使用说明
Vue快捷引用与组件对应
```javascript
vm.$formatter //Format.js
vm.$logger //Logger.js
vm.$numberic //Numberic.js
vm.$ajax //ajax.js
vm.$msgBox //MessageBox.js
vm.$notify //Notifier/index
vm.$LoadMask //LoadMask.js
vm.$Dialog //Window.js
```

### 安装/合入指南
从gitlab仓库合入、修改以下文件或目录，使用代码对比工具方便合入。需要合入/修改的文件：
* Makefile *（修改）*
* .babelrc
* .dev.babelrc
* package.json
* sfis.conf *（修改）*
* src
    * 3parts
    * sfwidget
    * cache-worker.js
    * _index.html *（修改）*
    * sea.conf.js *（修改）*
    * common
        * sfis.conf *（修改）*
    * home
        * sfis.conf *（修改）*

合入文件，主要添加第三方库、进行配置文件修改（`sfis.conf`添加`jsBabel`,`vue`的配置项）。

Makefile的sfis工具地址需要修改，另外需要在添加`npm install`命令，安装babel插件。

注意：需要检查当前版本公共组件`common`，`mod-plugins`目录代码与common-widgets库中代码的差别。


### 开发工具
主要添加vue template、babel支持等功能
* [sfis](http://200.200.151.26:800/vt/sfis.git)
* [shs](http://200.200.151.26:800/vt/sfis.git)

注意事项：
* 如果vue组件有模板，请为vue组件配置`template`属性，即
```javascript
export default {
    template: ''
};
```
* vue文件依赖，需要写文件后缀`.vue`，即
```javascript
require('path/path/my-vue-module.vue');
import myVueModule from 'path/path/my-vue-module';
```
* `cache-worker.js`可配置缓存目录，加快页面加载




