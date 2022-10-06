# react组件的三大属性

## state

state在组件中被称为“状态机”，其中存储着组件需要用到的各种状态或者属性。当我们想要去修改state里某些属性的状态时，不能通过直接修改的方式进行修改需要通过setState去进行修改。

### state中this的指向

当我们需要通过触发条件去修改state中的某个属性时，尤其要注意this的指向，this有时候会丢失，比如我们通过点击事件去触发时。

```js
class Weather extends React.Component{
            state = {
                isHot:false,
                wind:'微风'
            }

            render(){
                const {isHot,wind} = this.state;
                return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热': '凉爽'},{wind}</h1>
            }
```

在render函数的返回中我们将实例对象的changeWeather赋值给了onClick进行回调此时的this就丢失了此时的this不再指向实例，而是undefined。

原因：render是定义在类的原型上的方法，当我们通过Weather调用时，此时的this是指向Weather的实例，但是当我们将this.changeWeather赋给onClick进行回调时此时this在严格模式下就指向undefined

解决方法：通过箭头函数或bind改变this指向

*  this.changeWeather = this.changeWeather.bind(this)
* changeWeather=()=>{}

## props



# 跨域问题：（04配置代理）

出现情况：跨域时也就是说当客户端此时的端口为3000时需要去端口为5000的服务器请求数据时，客户端会拒绝从服务器请求回来的数据

解决办法：配置代理（两个方法）

方法一：在package.json配置文件的最下面加一行{"proxy":"目标服务器地址"}

方法二：

1. 第一步：创建代理配置文件

   ```
   在src下创建配置文件：src/setupProxy.js
   ```

2. 编写setupProxy.js配置具体代理规则：

   ```js
   const proxy = require('http-proxy-middleware')
   
   module.exports = function(app) {
     app.use(
       proxy('/api1', {  //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
         target: 'http://localhost:5000', //配置转发目标地址(能返回数据的服务器地址)
         changeOrigin: true, //控制服务器接收到的请求头中host字段的值
         /*
          changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
          changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
          changeOrigin默认值为false，但我们一般将changeOrigin值设为true
         */
         pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
       }),
       proxy('/api2', { 
         target: 'http://localhost:5001',
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       })
     )
   }

此时在axios请求时将路径端口改为和客户端一样的端口号

# react中兄弟组件进行通信的方法：（03todo案例和05github搜索案例）

需要父组件给子组件传入一个回调函数，等适时的时候去调用该函数将数据带回父组件，在父组件内进行一系列对数据的操作传给state(state已更新render就会重新调用，页面就是刷新)，此时通过props传给另一个子组件

# 消息订阅与发布(06GitHub搜索-pubsub版)

1. 工具库: PubSubJS

2. 使用: 

   2.1.import PubSub from 'pubsub-js' //引入

   2.2.PubSub.subscribe('delete', function(data){ }); //订阅2.3.PubSub.publish('delete', data) //发布消息

在需要使用状态(state)的地方，初始化状态，然后在生命周期函数componentWillMount中进行订阅消息(更改状态)。在更新状态的组件中去发布状态，

# 网络请求之fetch(07GitHub搜索-fetch)

```js
search = async()=>{
    // 消息发布，(名称，消息)，名称和订阅的名称要一致
    PubSub.publish('update',{isFirst:false,isLoading:true})
    // 解构赋值(连续解构赋值+重命名)
    const {keyWordElement:{value:keyWord}} = this
    // 请求地址可以简化为/api/search/users?q=${keyWord}
    
     /*axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`)
    .then(res=>{
      PubSub.publish('update',{isLoading:false,user:res.data.items})
      this.keyWordElement.value = ''
    })
    .catch(err=>{
      PubSub.publish('update',{isLoading:false,err:err.message})
    })
    */
    
    // 使用fetch发送网络请求(未优化)
    
    /*
    fetch(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
      response =>{
        console.log('服务器启动成功');
        // console.log(response);
        return response.json()
      },
      error =>{
        console.log('服务器启动失败',error);
      }
    ).then(
      response =>{
        console.log('获取数据成功',response);
      },
      error =>{
        console.log('获取数据失败',error);
      }
    )
    */
    
   // 使用fetch发送网络请求(优化)
    
    try {
      // await等待请求成功的，请求错误需要用try  catch
      const res = await fetch(`http://localhost:3000/api/search/users?q=${keyWord}`)
      const date = await res.json()
      PubSub.publish('update',{isLoading:false,user:date.items})
      // console.log(date);
    } catch (error) {
      console.log('请求失败',error);
    }
  }
```

# 路由的基本使用(08-路由的基本属于)

1.明确好页面中的导航区和展示区

2.导航区使用<Link to="/组件名">...</Link>标签

3.展示区使用<Route path="/组件名" component={组件名}><Route/>

进行路径的匹配

4.在<App>最外侧包裹一个<BrowserRouter>或<HashRouter>

# 路由组件与一般组件

1.写法不同

* 一般组件:<Demo/>
* 路由组件: <Route path="/about" component={Demo}></Route>

2.存放位置不同

* 一般组件:components文件夹
* 路由组件:pages或view

3.收到的props不同

* 一般组件:传什么就收到什么
* 路由组件:默认收到三个属性			

1. **history**:

2. 1. **action**: "PUSH"
   2. **block**: *ƒ block(prompt)*
   3. **createHref**: *ƒ createHref(location)*
   4. **go**: *ƒ go(n)*
   5. **goBack**: *ƒ goBack()*
   6. **goForward**: *ƒ goForward()*
   7. **length**: 2
   8. **listen**: *ƒ listen(listener)*
   9. **location**: {pathname: '/about', search: '', hash: '', state: undefined, key: 'r4jgq3'}
   10. **push**: *ƒ push(path, state)*
   11. **replace**: *ƒ replace(path, state)

3. **location**:

4. 1. **hash**: ""
   2. **key**: "r4jgq3"
   3. **pathname**: "/about"
   4. **search**: ""
   5. **state**: undefined

5. **match**:

6. 1. **isExact**: true
   2. **params**: {}
   3. **path**: "/about"
   4. **url**: "/about"

# 路由的嵌套(14-src-路由的嵌套)

1.在注册子路由时要加上父路由的path值

2.路由的匹配是按照路由注册的顺序进行的

在注册子路由时加上父路由的path值是因为，路由的匹配时按照路由注册的顺序进行的，所有父路由一定在子路由前就注册完了，所有当我们要跳转到子路由时他先会去最开始注册的路由去匹配(模糊匹配，如果开启严格匹配就匹配不上了)，接着会一层层的往后匹配



# 向路由组件传递参数(15-给路由组件传参)

一共3种方法，都常用

1.通过params携带参数

* 路由链接(携带参数)：*<Link to={`/home/messages/details/${item.id}/${item.title}`}>{item.title}</Link>*
* 注册路由(声明接收)：*<Route path='/home/messages/details/:id/:title' component={Details}></Route>*
* 接收参数：*this.props.match.params*

2.通过query(search)携带参数

* 路由链接(携带参数)：*<Link to={`/home/messages/details/?id=${item.id}&title=${item.title}`}>{item.title}</Link>*
* 注册路由(无需声明接收)：*<Route path='/home/messages/details' component={Details}></Route>*
* 接收参数：*qs.parse(this.props.location.search.slice(1))*
* 注意：获取到的时urlencoded参数，需用再次通过qs解析

3.通过state携带参数

* 路由链接(携带参数)：<Link to={{pathname:'/home/messages/details',state:{id:item.id,title:item.title}}}>{item.title}</Link>
* 注册路由(无需声明接收)：<Route path='/home/messages/details' component={Details}></Route>
* 接收参数：*this.props.location.state*
* 注意：刷新也可以保留参数





# Browser Router和Hush Router的区别

1.底层原理不同

* Browser Router使用的是H5的history API,不兼容IE9及以下版本
* Hush Router使用的是url的hash值

2.path表现形式不同

* Browser Router路径中没有#   http://localhost:3000/about
* Hush Router包含#  http://localhost:3000/#/about

3.刷新后对路由state参数的影响

* Browser Router没有影响，参数保存在history的state中
* Hush Router刷新后会导致state参数消失

4.注意：Hush Router可以解决一些路由路径的问题(样式的丢失)

# redux

![](D:\这是一个文件夹\react\redux原理图.png)

## redux精简版(learnRedux-2)

1.创建文件在src文件夹底下

* 创建redux文件
  * 创建store.js
  * 创建count-reducer.js

2.store.js

* 引入redux中的 legacy_createStore函数，并调用，创建一个store状态管理树

* 在调用legacy_createStore函数时传入需要为其服务的reducer

* 将这个store树暴露出来

* ```js
  // 引入legacy_createStore方法，专门创建redux中最核心的store
  import { legacy_createStore } from "redux";
  // 引入Count组件专用的reducer
  import countReducer from './count-reducer'
  
  export default legacy_createStore(countReducer)
  ```

3.count-reduce.js

* reducer本质上就是一个函数，需要传入两个参数，preState(先前状态)和action(动作对象)

* reducer的两个作用：初始化状态，加工状态

* reducer第一次被调用时，是由store触发的，此时传递preState的值为undefined

* ```js
  const initState = 0
  export default function countReducer(preState = initState,action){
      console.log(preState,action);
      const {type,date} = action
      switch (type) {
          case 'increment':
              return preState+date;
          case 'decrement':
              return preState-date;
          default:
              return preState
      }
  }
  ```

4.在index.js中检测store的变化，一旦发生变化就重新渲染页面。

注意：redux只是管理状态，至于状态的变化驱动页面更新，需要我们自己去解决



store的三个重要的API：

* getStore()：获取store中的状态
* dispatch()：通过store发布action给reducer进行修改状态
* subcribe()；用于监听store中状态的变化

## redux完整版(learn-redux3)

与精简版相比，完整版多了一个action.js文件，这个文件是用于定义我们想要修改的状态的事件，在进行store.dispatch时需要将这个事件作为参数传递给给dispatch函数，

action.js:

```js
export const createIncrementAction = (date)=>{return {type:INCREMENT,date}}
export const createDecrementAction = (date)=>{return {type:DECREMENT,date}}
```

修改store的状态：

```js
store.dispatch(createIncrementAction(value*1))
```

## 异步action(learn-redux4)

action有两种写法，一种返回值为**函数**，一种返回值为**对象**

* 返回值为对象：**同步action,返回的是一个Object类型的一般对象**
* 返回值为函数：**异步action,返回的是一个函数，因为只有在函数中才可以写一些异步操作**

同步action：

```js
createIncrementAction = (date)=>{return {type:INCREMENT,date}}
```

异步action:

```js
createIncrementActionAsync = (date,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(date))
        }, time);
    }
}
```

当我们进行网络请求时就需要用到异步action

***异步action中第1个参数叫dispatch，第2个参数是getState***
***在异步action中就可以写异步代码***
***在异步代码，还需要派发一个同步的action***

使用异步action需要中间件thunk：

* yarn add/npm install **redux-thunk**

* 在store.js中使用

  ```JS
  import thunk from 'redux-thunk'
  
  export default legacy_createStore(countReducer , applyMiddleware(thunk))
  ```

  

# react-reudx

redux在任何框架中都可以使用(vue,react等)，而react-redux是facebook根据redux给react专门开发的管理工具

![](D:\这是一个文件夹\react\react-redux模型图.png)

react-redux的使用；在redux方面使用的方法差不多，同样需要action，store，reducer这三个重要文件，并且文件内容都差不多

## redux与react-redux的使用差别

根据原组件(UI组件)新增一个容器组件。也就是说react-redux会将将之前的一个组分为两已组件。

UI组件：

* 只负责 UI 的呈现，不带有任何业务逻辑
* 通过props接收数据(一般数据和函数)
* 不使用任何 Redux 的 API
* 一般保存在components文件夹下

容器组件：

* 负责管理数据和业务逻辑，不负责UI的呈现
* 使用 Redux 的 API
* 一般保存在containers文件夹下

UI组件只用于页面的展示，而redux相关的操作都放在容器组件中,并且在根组件(</App>)中也不需要引入UI组件，要引入容器组件并需要通过props传入store

## 细说容器组件

问题：如何将UI组件和容器组件连接起来

通过connect函数

```js
// connect调用后返回一个函数再次调用传入的参数是UI组件
// connect调用时可以传入两个参数，都为函数，分别用来传递redux中的状态和传递用于操作状态的方法
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
```

connect是连接[React](https://so.csdn.net/so/search?q=React&spm=1001.2101.3001.7020)组件与Redux store，建立组件与store.state和dispatch的映射关系。连接操作不会改变原来的组件类。返回一个新的已于Redux store连接的组件类。

mapStateToProps：

* mapStateToProps是一个函数，用于建立组件和store.state的映射关系
* mapStateToProps的返回值是一个纯对象，这个对象与该组件的props合并。
* 如果定义了该参数，组件将会监听redux store的变化。只要redux store发生变化，mapStateToProps函数就会被调用。如果没有定义该参数，组件将不会监听redux store的变化。
* 返回的对象中key作为props中的key，value作为props中的value
*  *mapStateToProps专用于传递状态*

mapDispatchToProps：

* mapDispatchToProps用于建立组件和store.dispatch的映射关系
* mapDispatchToProps可以是对象或函数
* mapDispatchToProps是对象
  * 定义在该对象上的函数将作为Redux actions creators。将动作创建者作为dispatch参数，返回一个新的函数。
  * 对象上的函数名作为属性名.dispatch（actions creators）作为属性值。组成新的对象与该组件的props合并。
* mapDisatchToProps是函数
  * 如果传递的是一个函数mapDispatchToProps（dispatch，[ownProps]）
  * 该函数接受两个参数dispatch和ownProps
  * 返回值是一个对象，该对象是通过调度函数与actionCreator以某种方式绑定在一起的。可以使用终极版的辅助函数bindActionCreators（）
  * 如果省略mapDispatchToProps参数，默认情况下，调度会注入到组件的道具中
  * 如果指定的ownProps参数，该参数的值为传递到组件的道具，当组件接受新的道具时，mapDispatchToProps也会被调用

```JS
//mapStateToProps
const mapStateToProps = (state)=>{
    return {count:state}
}
//mapDispatchToProps是函数
const mapDispatchToProps = (dispatch)=>{
    return{
        increment:(number)=>{dispatch(createIncrementAction(number))},
        decrement:(number)=>{dispatch(createDecrementAction(number))},
        incrementAsync:(number,time)=>{dispatch(createIncrementActionAsync(number,time))}
    }
}
//mapDispatchToProps是对象
{
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementActionAsync
}
```

## 关于react-redux使用的优化

优化一：将UI组件和对应的容器组件合并(将UI组件在容器组件中)，无需在容器组件中引入UI组件

优化二：当一个页面中存在多个容器组件时都要通过props传store时，可以通过Provider组件包裹App组件，只需给Provider组件传参即可

```js
<Provider store={store}>
        <App></App>
</Provider>
)
```

优化三：使用react-redux就不需要使用store.subscribe来监听state的变化了

优化四：mapStateToProps与mapDispatchToProps可以直接在connect函数写

```js
connect(
    // 映射状态
    (state)=>{
        return {count:state}
    },
    // 映射操作状态的方法
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementActionAsync
    })(Count)
```

## 数据共享版

在项目中肯定有很多状态进行共享，那么就需要我们将多个reducer结合起来

一个组件对应组件的action.js(需要对状态操作的时间)和reducer.js(如何操作状态)

### *combineReducers*

通过这个方法将多个reducer合并，传递给legacy_createStore使用

```js
const allReducer = combineReducers({
    shuZi: countReducer,
    ren:personReducer
})

export default legacy_createStore(allReducer , applyMiddleware(thunk))
```

# react拓展

## setState

setState两种修改状态的方法		
	(1). setState(stateChange, [callback])------对象式的setState
	            1.stateChange为状态改变对象(该对象可以体现出状态的更改)
	            2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
	(2). setState(updater, [callback])------函数式的setState
	        1.updater为返回stateChange对象的函数。
	        2.updater可以接收到state和props。
	        4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
		1.对象式的setState是函数式的setState的简写方式(语法糖)
		2.使用原则：
				(1).如果新状态不依赖于原状态 ==> 使用对象方式
				(2).如果新状态依赖于原状态 ==> 使用函数方式
				(3).如果需要在setState()执行后获取最新的状态数据, 
					要在第二个callback函数中读取

## lazyLoad

路由的懒加载就是只有我们用到该路由组件时才会去加载该组件

使用方法

```
导入路由组件方面：
懒加载：const Home = lazy(()=>{return import('./Home')})
普通版：import Home from './Home'

注册路由方面：
懒加载：需要用Suspense组件将注册的路由包起来，并加上fallback
<Suspense fallback={<Loading></Loading>}>
    <Route path="/about" component={About}></Route>
    <Route path="/home" component={Home}></Route>
</Suspense>
注意：fallback是一定要写的
fallback有两种形式分别是组件形式和普通html语句模式
fallback={<Loading></Loading>}
fallback={<h2>Loading...</h2>}
组件模式不能通过懒加载的方式引入
```

## hooks

在函数式组件中是没有办法使用this.state等一些React特性的，需要就需要引入hooks

### React.useState()

```
(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)  
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value => newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
```

React.useState()函数返回的是一个数组，数组的第一个元素是一个状态，第二个元素是修改该状态的方法。他需要我们传入该状态的初始值

### React.useEffect()

```
(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明: 
        useEffect(() => { 
          // 在此可以执行任何带副作用操作
          return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
    
(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount() 
```

### useRef

```
(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
```

## renderProps

次功能类式Vue中的插槽

使用方法：(在A组件中插入B组件)

* 在A组件标签中传入props属性(不非得是render)

* 该属性是一个函数，其返回值为一个组件(B组件)

* 在A组件需要插入B组件的地方对该函数进行调用

  ```
  this.props.render(this.state.name)
  ```

参考代码：

```js
class Demo extends Component {
  render() {
    return (
      <div className='parent'>
        <h2>我是祖先组件</h2>
        {/* 写在组件标签中的内容 存放在该组件的props.children中 */}
        {/* <A>Hello</A> */}
        {/* 给A组件传入一个函数 返回值为B组件 */}
        <A render={(name)=>{return <B name={name}></B>}}></A>
      </div>
    )
  }
}

class A extends Component {
    state = {
        name:'Tom'
    }
  render() {
    return (
      <div className='father'>
        <h2>我是A组件</h2>
        {/* {this.props.children} */}
        {/* 通过this.props.函数名()调用函数 实现插槽功能 */}
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='son'>
        <h2>我是B组件,A组件传入的名字为{this.props.name}</h2>
      </div>
    )
  }
}
```

### 如何向组件内部动态传入带内容的结构(标签)?

	Vue中: 
		使用slot技术, 也就是通过组件标签体传入结构  <A><B/></A>
	React中:
		使用children props: 通过组件标签体传入结构
		使用render props: 通过组件标签属性传入结构,而且可以携带数据，一般用render函数属性

### children props

	<A>
	  <B>xxxx</B>
	</A>
	{this.props.children}
	问题: 如果B组件需要A组件内的数据, ==> 做不到 

### render props

	<A render={(data) => <C data={data}></C>}></A>
	A组件: {this.props.render(内部state数据)}
	C组件: 读取A组件传入的数据显示 {this.props.data} 

## 组件优化(PureComponent)

### Component的2个问题 

> 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
>
> 2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

### 效率高的做法

>  只有当组件的state或props数据发生改变时才重新render()

### 原因

>  Component中的shouldComponentUpdate()总是返回true

### 解决

	办法1: 
		重写shouldComponentUpdate()方法
		比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
	办法2:  
		使用PureComponent
		PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
		注意: 
			只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
			不要直接修改state数据, 而是要产生新数据
	项目中一般使用PureComponent来优化



