# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 项目笔记

### 展示型组件
* 关心数据的展示方式
* 不依赖app中的其它文件
* 不关心数据是如何加载和变化的
* 仅通过props接收数据和回调函数
* 除非需要用到state,生命周期函数或性能优化,通常写成函数式组件

### 容器型组件
* 关心数据的运作方式
* 为展示型组件提供数据和操作数据的方法
* 为展示型组件提供回调函数
* 通常是有状态的,并且作为数据源存在

#### 代码文件结构及命名规范
* components文件夹存放所有的展示型组件
* containers文件夹存放所有的容器型组件
* 这两个文件夹下的__test__文件夹存放所有组件测试文件
* 文件使用Pascal Case命名法
* src根目录下放统一使用的一些文件


### React理念步骤初步理解
* 第一步把UI划分出组件层级
* 第二步创建应用的静态版本

#### 在React中使用Bootstrap
1、可以在react项目中执行以下命令安装bootstrap
```js
npm install bootstrap@4 --save
```
2、在使用的时候，直接在对应（index.js或者App.js）文件导入即可
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

#### React使用JSX语法在Vscode自动保存后报错（解决Vscode自动保存格式化的问题）
在插件中寻找把 JS-CS-HTML Formatter 这个插件，把其卸载掉
可以使用插件Prettier-Code formatter

#### 图标库
安装ionicon图表库
```js
npm install react-ionicons@2.1.6 --save
```

#### 为项目选择图标库
* 使用svg图表库而不是font icon
* 很多free icon set - icomoon、Ionicons ...
* 里我们选用Ionicons点https://ionicons.com/
* 使用react-ionicons改造PriceList组件

代码示例
```js
import Ionicon from 'react-ionicons'
<Ionicon className="rounded-circle" 
                    fontSize="30px"
                    style={{backgroundColor: '#dc3545', padding: '5px'}}
                    color={'#fff'}
                    icon='ios-close'>
                    </Ionicon>
```
#### 安装类型检查工具包
```js
npm install --save prop-types
```

##### 代码示例
```js
import PropTypes from 'prop-types'
// 类型检查
PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}
PriceList.defaultProps = {
    items: [],
    onModifyItem: () => {}
}
```
##### 使用PropTypes检查属性类型
* 类型检查可以帮助我们更好的发现Bug
* React 内置了PropTypes 来完成这个任务
* Props 默认的值: defaultProps
* 为ItemList添加PropTypes检查


### State 设计原则
* 最小化State原则
* DRY - Don't Repeat Yourself
* 有些数据可以根据State计算得出


首页State分析
* 价格列表
* 当前年月
* 钱数之处收入总和
* 注意价格条目的分类信息和月份信息
* 当前视图信息（列表模式，图表模式）


### 总结
1、组合所有静态组件
2、State设计原则
3、State分析和最终结果
4、分析数据流和添加单项数据流

### 通用测试框架 Jest
* 通用测试框架
* 支持多平台，运行速度极快
* 内置代码覆盖率测试
* 为React提供了一些特殊的测试方法

断言库
1、新建一个测试文件`excmple.test.js`
2、编写测试代码
```js
import { exact } from "prop-types"

test('test equal', () => {
    expect(2 + 2).toBe(4)
})
test('test no equal', () => {
    expect(2 + 2).not.toBe(5)
})
test('test to be true or false', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('test number', () => {
    expect(4).toBeGreaterThan(3)
    expect(0).toBeLessThan(5)
})

test('test object', () => {
    expect({name:'ramona', age: 30}).toEqual({name: 'ramona', age: 30})
})
```
3、运行测试文件
```js
npm test 文件路径(src/example.js)
```

#### React测试工具
* React 官方测试工具-ReactTestUtils
* Airbnb 基于官方的封装-Enzyme

Enzyme优点
1、简单易懂
2、类似Jquery 链式写法

两种测试方法
* Shallow Rendering
* DOM Rendering

#### 使用enzyme进行测试
1、安装依赖
```js
npm install enzyme enzyme-adapter-react-16 --save-dev
```
2、在setupTests.js中进行配置
```js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter()})
```
3、创建一个测试文件 `xxx.test.js`
```js
import React from 'react'
import { shallow } from 'enzyme'
import TotalPrice from '../TotalPrice'

const props = {
    income: 1000,
    outcome: 2000
}

describe('test TotalPrice component', () => {
    it('component should render corrent income&outcome number', ()=> {
        const wrapper = shallow(<TotalPrice {...props}></TotalPrice>)
        expect(wrapper.find('.income span').text() * 1).toEqual(1000)
        expect(wrapper.find('.outcome span').text() * 1).toEqual(2000)
    })
})
```

#### 价格列表单元测试用例分析
* 传入特定数组，是否渲染对应长度的条目
* 每个条目是否渲染特定组件和内容
* 点击按钮是否触发特定回调

TDD 

Snapshot testing  快照测试

### SPA页面
#### 什么是SPA
* 一种Web应用程序或网站
* 在和用户交互的时候用户不会跳转到其他的页面
* 由JS实现URL变换和动态变换HTML的内容

### React Router
1、安装react-router
```js
npm install react-router-dom --save 
```
