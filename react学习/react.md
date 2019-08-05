之前学过vue，现在开始学习react，这里用来放练习时的demo和笔记
# react
三个特点:声明式  组件化 一次学习，随处编写<br>
单项数据流：Moldel->view<br>
React高效的原因：操作的是虚拟DOM对象。DOM diff算法，最小化页面重绘。算出页面中哪里变化了<br>
模块：
组件：用来实现 特定功能效果的代码集合。当一个界面的功能很复杂时，就需要抽象成很多个组件。

模块化：当应用的js都是以模块来编写的，这个应用就是一个模块化应用

组件化：当应用以多组件方式实现功能，这个应用就是一个组件化应用

<script src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script> //把JSX转化为JS          BootCDN

```
  //创建虚拟DOM对象
    let user = <h2>xixixi</h2>
    //渲染虚拟DOM对象
    ReactDom.render(user,document.getElementById('app'))
```



# JSX

## 创建虚拟DOM对象

```
var element = React.createElement('h1',{id:'myTitle'},'hello')
let element = <h2>hello</h2> //JSX语法创建
```

```
React.createElement(
  type,
  [props],
  [...children] //内容
)

```

## JSX

JSX:React定义的一种类似于XML的JS扩展语法：XML+JS 。 作用：用来创建react虚拟DOM对象。就是在JS中可以直接写HTML。

```
var msg = 'Hello JSX'
var ele = <h1>{msg}</h1>
//在js中直接写html 在html中写js加入{}  最终产生的就是JS对象。
```

JSX需要用babel去解析jsx。找到<后再找/> 

# 元素渲染

# 组件与props

## 函数组件&class组件

```javascript
//工厂函数（无状态 定义简单组件）
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;  //返回虚拟DOM集合
}

// es6定义,最常用，必须要继承React的核心组建类（定义复杂组件）
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>; //返回虚拟DOM集合
  }
}
```

## 渲染组件

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

1. 我们调用 `ReactDOM.render()` 函数，并传入 `<Welcome name="Sara" />` 作为参数。
2. React 调用 `Welcome` 组件，并将 `{name: 'Sara'}` 作为 props 传入。
3. `Welcome` 组件将 `<h1>Hello, Sara</h1>` 元素作为返回值。
4. React DOM 将 DOM 高效地更新为 `<h1>Hello, Sara</h1>`。

组件名称必须是大写开头

return 返回的虚拟DOM元素只有一个根元素

虚拟DOM元素必须要有结束标签

## 组合组件

可以在一个组件中嵌套另一个组件

```javascript
function Welcome(props){
    return(
        <h1>Hello,{props.name}</h1>
    )
}
function App(props){
    return(
        <div>
        <h3>app组件中的值{props.age}</h3>
        <Welcome name="Sara"/>
        <Welcome name="Cahal"/>
        <Welcome name="Jenny"/>
        </div>
    )
}
ReactDOM.render(
    <App age="21"/>,
    document.getElementById('root')
)
```

通常来说，每个新的 React 应用程序的顶层组件都是 `App` 组件。

```javascript
class App extends React.Component{
    render(){
        console.log(this.props)
        let nameArr = this.props.name;
       return(
           <div>
                <p>aaaaaa</p>
                <Welcome name="ttttt"/>
                {
                nameArr.map((item,index)=>{                //.map方法遍历数组中的每一个值 然后返回渲染的东西
                    return  <Welcome name={item} key={index}/>
                })
                }
           </div>
       )
    }
}
function Welcome(props){
    return(
        <div>{props.name}</div>
    )
}
let arr = ['bbb','ccc','ddd','eee'];
ReactDOM.render(
    <App name={arr} />,
    document.getElementById('app')
)
```



## 拆分组件

```javascript
function Avatar(props){
    return(
        <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>
    );
}
function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
function formatDate(date){
    return date.toLocaleDateString();
}
function Comment(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
const comment = {
    date:new Date(),
    text:'I hope you enjoy learning React!',
    author:{
        name:'Hello Kitty',
        avatarUrl:'https://placekitten.com/g/64/64'
    }
};
ReactDOM.render(
    <Comment date={comment.date} text={comment.text} author = {comment.author}/>,
        document.getElementById('root')
      );
```

## 受控组件

(Model--->View)

>虽然是单项数据流，但是React却可以通过setState()控制组件 达到双向数据的显示效果

## es6----类

方法写在原型上，用过new实例去调用这个方法,通过super()去继承父类的构造方法

```
class Person{
    constructor(name,age){
        // super();//调用父类的构造方法
        this.age = age;
        this.name = name;
    }
}
class Haha extends Person{
    constructor(name,age,xxx){
        super();//调用父类的构造方法
        this.age = age;
        this.name = name;

        this.xxx = 'xxx'
    }
    showName(){
        console.log(this.name) //this指的是实例
    }
}
let haha = new Haha('gxy',20,9999)
console.log(haha)
/*
Haha{age:20,name:'gxy',xxx:'xxx'} 看不到方法，方法在原型上
*/
haha.showName(); //减少复用，让所有的实例都可以去共享。
```

## props属性

>每个组件对象都有props属性
>
>组件标签的所有属性都保存在props 
>
>读取方式：this.props.ptopertyName
>
>作用：通过**标签属性**从组件外部向组件内部传递数据（只读）

```
 // 设置默认porps属性
    Student.defaultProps = {
        sex:'女'
    }
 //设置props必要的数据类型
    Student.propTypes = {
        username:propTypes.string.isRequired,
        age:propTypes.number.isRequired,
    }
//传入对象的所有属性
<Person {...person2}/>
```

## refs属性

>组件内的标签定义refs来标识自己
>
>在组件中this.refs.refName得到真实的DOM对象
>
><input ref='username'>
>
>this.refs.username返回input对象

# 事件处理

> 使用的是自定义（合成）事件，不使用DOM事件
>
> 事件是通过委托的方式处理，即委托给最外层元素
>
> ```javascript
>   <button onClick={this.handlerClick}>提示输入数据</button>
> ```
>
> 函数不用加括号，必须用{}包起来，this.方法名。
>
> 自定义事件中的this默认指向Null，必须要在constructor中修改this的指向才能在自定义事件中使用。

```javascript
      class App extends React.Component{
        constructor(props){ //只会被调用1次
            super(props)
            console.log(this)//这里的this是实例
            //统一在这里面修改this
            //找到函数 用什么去强制绑定this call apply bind
            //传参 call apply第二个参数为数组
            //bind不会立即调用，其他两个会调用  传参形式与call一样
            this.handlerClick = this.handlerClick.bind(this)
        }
        render(){
            console.log(this) //内置方法的this指向实例对象
            return(
                <div>
                    <input ref="msg" type="text"/>
                    <button onClick={this.handlerClick}>提示输入数据</button>
                    <input  onBlur = {this.handlerBlur} type="text" placeholder="失去焦点提示数据"/><hr/>
                </div>
            )
        }
        handlerBlur(event){
            console.log(event.target.value)
        }
        handlerClick(){
            console.log(this) //默认这里的this指向的是null,但可以在constructor中修改
                             // 脚手架中支持箭头函数，这里不是很支持
            console.log(this.refs.msg.value)

        }
    }

    ReactDOM.render(<App/>,document.getElementById('app'))
```



# state

之前我们更新UI唯一的方式是创建一个全新的元素，并将其传入ReactDOM.render()

```javascript
class Clock extends React.Component{
    render(){
        return(
            <div>
            <h1>Hello Wold</h1>
            <h2>It is {this.props.date.toLocaleTimeString()}</h2>
        </div>
        )
    }
}
function tick(){
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    );
} 
setInterval(tick,1000)
```

每次更新时会调用`render`方法，渲染`<Clock/>`,创建`class实例`

可以向class组件中添加局部state



状态机：通过更新组件的状态值来更新对应的页面显示（重新渲染）

初始化状态：constructor

```
//初始化
constructor(props){
    super(props);
    this.state = {
        stateProp1:value1,
        stateProp2:value2
    };
}
//读取某个状态值
this.state.statePropertyName
//更新状态
this.setState({
    stateProp1:value1,
    stateProp2:value2
})
```

```
//es6解构赋值获取某个的状态值
let {isChange} = this.state 
//获取this.state中状态为isChange的值
```

**props和state的区别**

props只读

props是从组件外传进来的

state是在组件内部初始化的数据

# 生命周期

- 组件挂载阶段

除了`render()`，其他只执行一次

Initial render--->`constructor()`生成实例对象---->`componentWillMount()`调用runder()方法前 ,组件渲染前被调用。--->`render()` 拿到虚拟DOM对象，转化为真实的DOM对象，渲染模板----->`componentDidMount` 组件挂载成功

- 组件更新阶段

this.setState()更新状态--->shouldComponentUpdate()组件收到新的props或state时被调用，常用于优化组件，减少渲染次数 --->`componentWillUpdate()`接收到新的props或state但还没有render时调用 --->`render()` --->`componentDidUpdate()`组件更新完后调用

- 组件卸载阶段

`componentWillUnmount`

```
ReactDOM.unmountComponentAtNode(container)
```

vue与react生命周期对比

<https://blog.csdn.net/jean850218/article/details/80799497>

# 虚拟DOM diff算法

Diff算法：最小化页面重绘

# Webpack_React

```
npm init
npm install react react-dom --save
npm install babel-core babel-preset-es2015 babel-preset-react --save-dev 
npm install babel-loader@7 --save-dev

npm install style-loader css-loader --save-dev //加载css文件 把css放在style标签
//webpack-dev-server 默认服务根路径一下的index.html
devServer:{
    contentBase:'./' :内置服务器动态加载页面所在目录
}
```





```
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```



