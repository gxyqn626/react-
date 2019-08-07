# Vue-Resource

>实现异步加载的插件
>
>```
><script src="https://cdn.staticfile.org/vue-resource/1.5.1/vue-resource.min.js"></script>
>
>npm install vue-rousource --save
>```

## 请求API

- get(url,[options])
- head(url,[options])
- delete(url,[options])
- jsonp(url,[options])
- post(url,[body],[options])
- put(url,[body],[options])
- patch(url,[body],[options])

## 全局拦截器interceptors

> 拦截器在请求发送前和请求发送后做一些处理。
>
> 在某些场景下，比如请求发送前在headers中设置access_token,或者在失败的时候，提供共同的处理方式。