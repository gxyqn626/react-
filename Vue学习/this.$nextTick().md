昨天写代码的时候，遇到一个问题，当要进行DOM操作的时候，通过refs获取DOM元素，但是获取不到，把DOM操作放到this.$nextTick()中发现可以了。那么this.$nextTick()到底是什么东西呢？

先看第一个例子:

```html
 <div ref="hello">
        <h1>HAHAHA~</h1>
</div>
<button @click="get">点击</button>
methods:{
            get(){
                console.log('2')
            }
        },
        created(){
            console.log('进入created()了');
            console.log(this.$refs['hello']);
            this.$nextTick(()=>{
                console.log('nextTick??')
                console.log(this.$refs['hello'],'获取到了')
            })
        },
        mounted(){
            console.log('进入mounted()了');
            console.log(this.$refs['hello'],'DOM生成啦');
        }
```

![1565147358370](C:\Users\青柠\AppData\Roaming\Typora\typora-user-images\1565147358370.png)

可以看出在created()中，直接获取DOM元素是不可以的，必须得借助this.$nextTick()。而在mounted中，由于DOM已经挂载完毕，所以可以直接获取。

例子二：

```javascript
<div ref="bye">
   {{value}}
</div>
<button @click="get">点击</button>
 methods:{
            get(){
                this.value='变之后'
                console.log(this.$refs['bye'].innerText,'1')
                this.$nextTick(()=>{
                    console.log(this.$refs['bye'].innerText)
                })
            }
        },
        data(){
            return{
                value:'变之前'
            }
        },
```

![1565147493702](C:\Users\青柠\AppData\Roaming\Typora\typora-user-images\1565147493702.png)

可以看到，虽然点击后data改变了，但是DOM数据还没有改变。

而在this.$nextTick()中，输出了真正改变后的DOM元素。

**即Vue中的`nextTick`涉及到Vue中DOM的异步更新**

### 应用场景

**在修改数据后立即使用这个方法，等待DOM更新，是个回调函数**

- 在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进`Vue.nextTick()`的回调函数中。

- 在Vue生命周期的`created()`钩子函数进行的DOM操作一定要放在`Vue.nextTick()`的回调函数中

  在`created()`钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进`Vue.nextTick()`的回调函数中。与之对应的就是`mounted()`钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 	

  >Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。
  >
  >如果同一个 watcher 被多次触发，只会被推入到队列中一次。
  >
  >然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
  >
  >Vue 在内部尝试对异步队列使用原生的 `Promise.then` 和`MessageChannel`，如果执行环境不支持，会采用 `setTimeout(fn, 0)`代替。

  

  

  