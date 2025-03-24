# 概述

掰弯this的三兄弟。需要能够手写、掌握三者的差别，从而灵活运用。





# call

## 应用场景

```JavaScript
var a = {
    name :'张三',
    bar: function(){
        console.log(this.name);
    }
}
var fn = function(){
        console.log(this.name);
    }

//直接使用fn，this指向global，在global下是没有name的
fn()    //undifend
fn.call(a)  //张三
a.bar() //张三


```





## 实现一个call





```JavaScript
Function.prototype.mycall = function(context){
    context = context || window         //注意！！这里判断临界，如果call()方法不传值，则call()方法默认指向window

    context.fn = this                   //实现的功能：相当于在context里面创建一个fn属性，然后这个属性值为  调用mycall方法的函数,但是注意！这里只是实现这个函数的定义，接下来要实现该函数的调用
    let arg = [...arguments].slice(1)    //实现传参
    let result = context.fn(...arg)
    delete context.fn                               //下面的注意中，添加到原对象的那句被删除，但是这个功能函数中的result 未改变
    return result
}
function test(){
    console.log(this.name);         //我希望在这里也能像call()函数一样，打印金总
}
console.log(a);
test.mycall(a)
console.log(a);                 //但是！！！！我们会发现在原  a对象上，真的就多了一个 function！！这是不可容忍的！   因此我们返回函数中，添加一条删除语句


```





# apply

整体和call差不多，主要注意传参处理



```JavaScript
Function.prototype.myApply = function(target) {
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  if (!Array.isArray(arguments[1])) {
    throw new Error('arg not a array')
  }
  target = target || window
  target.fn = this
  let args = arguments[1]
  let result = target.fn(...args)
  delete target.fn
  return result
};

const obj = { name: 123 };
function foo(...args) {
  console.log(this.name, args);
}
foo.prototype.name = 123;
const s1 = [1, 2, 3, 4, 5];
const s = foo.myApply(obj,s1);

```





# bind

## 区别

- 与 call 与 apply 的区别： fn.bind(obj) 不会立即执行 fn 函数，而 call, apply 会立即执行
- bind 返回的新函数可以普通调用也可以构造函数方式调用，当为构造函数时，this 是指向实例的
- bind() 方法的参数具有一个特性，就是函数柯里化，简单来说就是保留一个参数的位置，再第二次传参的时候自动把参数存入到这个位置中





## 场景



```JavaScript

//bind()方法
var a = {
    user:'张三',
    fn:function(){
        console.log(this.user);
    }
}
var b = a.fn

b.bind(a)       //会发现打印结果什么都没有     打印这个东东试试看
console.log(b.bind(a)); //会发现它是一个  function类型！！！


//因为bind()函数会返回一个函数体出来   所以应该这样使用
var c = b.bind(a)
c()
//如果需要传参的话    fn:function(x,y,z){console.log(x,y,z)}
c(1,2,3)


//当然可以这样写
b.bind(a,1,2,3)()
//这样写
b.bind(a)(1,2,3)
```



## 代码实现

```JavaScript
Function.prototype.mybind = function(thisArg) {
  if (typeof this !== 'function') {
    throw TypeError("Bind must be called on a function");
  }
  const args = Array.prototype.slice.call(arguments, 1),
    self = this,
    // 构建一个干净的函数，用于保存原函数的原型
    nop = function() {},
    // 绑定的函数
    bound = function() {
      // this instanceof nop, 判断是否使用 new 来调用 bound
      // 如果是 new 来调用的话，this的指向就是其实例，
      // 如果不是 new 调用的话，就改变 this 指向到指定的对象 o
      return self.apply(
        this instanceof nop ? this : thisArg,
        args.concat(Array.prototype.slice.call(arguments)) 
      );
    };
  // 箭头函数没有 prototype，箭头函数this永远指向它所在的作用域
  if (this.prototype) {
    nop.prototype = this.prototype;
  }
  // 修改绑定函数的原型指向
  bound.prototype = new nop();
  return bound;
}

// 测试

 let obj = { name: "ciel" }
    function test(x,y,z) {
      console.log(this.name) // ciel
      console.log(x+y+z) // 6
    }
    let Bound = test.mybind(obj, 1, 2)
    Bound(3) // 6
    new Bound() // bound {}

```

> 拓展：在箭头函数中，也有一段相关描写，可查阅一并学习