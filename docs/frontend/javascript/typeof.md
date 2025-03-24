# 原理

typeof直接通过  该变量在内存中的储存方式  来判断该变量是何种类型。



> JS在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息
- 000 :对象
- 010：浮点数
- 100 : 字符串
- 110 : 布尔
- 1 : 整数



但是！对于 `undefined` 和 `null` 来说，这两个值的信息存储是有点特殊的。

`null`：所有机器码均为0

`undefined`：用 −2^30 整数来表示

所以，`typeof` 在判断 `null` 的时候就出现问题了，由于 `null` 的所有机器码均为0，因此直接被当做了对象来看待。

因此在用 `typeof` 来判断变量类型的时候，我们需要注意，最好是用 `typeof` 来判断基本数据类型（包括`symbol`），避免对 null 的判断。





# 实现

其实这几种都是差不多的，就是通过其他的方法实现自己。

这里用Object.prototype.toString.call()实现一下

```JavaScript
function myTypeof(obj){
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}
```




需要知道：

这样实现的typeof其实超越了本身的效果，例如：

```JavaScript
typeof [] === 'array' // false
typeof [] === 'object'//true

myTypeof([]) === 'array' // true

```





解决办法呢，就是结果匹配输出。（不过吧，可以但没必要= =、、）

```JavaScript
function myTypeof(params){
  const type = Object.prototype.toString.call(params).slice(8, -1).toLowerCase()
  const map = {
    'number': true,
    'string': true,
    'boolean': true,
    'undefined': true,
    'bigint': true,
    'symbol': true,
    'function': true
  }
  return map[type] ? type : 'object'
}

// 测试用例
myTypeof(1)
myTypeof('')
myTypeof(false)
myTypeof(null)
myTypeof(undefined)
myTypeof(10n) // bigint
myTypeof(Symbol())
myTypeof(() => {})
myTypeof([])
myTypeof({})

```
