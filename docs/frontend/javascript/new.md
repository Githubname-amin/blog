# 效果

```JavaScript
// Otaku 御宅族，简称宅
function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin


```



从这个例子中，我们可以看到，实例 person 可以：

访问到 Otaku 构造函数里的属性
访问到 Otaku.prototype 中的属性





# 原理

> 描述一下实现过程：

- 新定义一个空对象
- 让这个新对象 继承 构造函数的原型对象（得到原型方法）
- 将构造函数的this指向这个对象（得到传入构造函数内的属性）
- 根据构造函数的返回值类型返回结果





# 代码实现



```JavaScript
  //实现一个 new 
  function myNew(fn) {
    if(){}
    let obj = {}
    obj = Object.create(fn.prototype) 
    let args = Array.prototype.slice.call(arguments, 1) // 获取除去fn之外的参数
    let result = fn.call(obj, ...args)
    return typeof result === 'object'||result instanceof Function ? result : obj;
  }
  
  
  //使用
  function foo() {
    this.name = 'ciel'
    this.arg = arguments[0]
  }
  foo.prototype.callName = function() {
    console.log(this.name)
  }
  // 测试
  let test = myNew(foo, 'hhh', '123', 'saf')
  test.callName()
  console.log(test.arg)

```

这里解释一下 `return typeof result === 'object' ? result : obj;` 这句代码：在JavaScript构造函数中：如果return值类型，那么对构造函数没有影响，实例化对象返回空对象；如果return引用类型（数组，函数，对象），那么实例化对象就会返回该引用类型。



 可以测试以下两个构造函数在 new 之后返回的值就可以理解这句话的意思了

```JavaScript
 function foo() {
   this.name = 'ciel'
   return function() {

   }
 }
 new foo() //  fn(){}
 function bar() {
   this.name = 'ciel'
   return 1
 }
 new bar() // {name: ciel}

```







---

拓展阅读：

> 这里引入了ES6的一个方法介绍：

new.target()   判断函数或者构造方法是否通过`new`运算符被调用的。

https://es6.ruanyifeng.com/?search=new.target&x=0&y=0#docs/class#new-target-属性

在通过 `new` 运算符被初始化的函数或构造方法中， `new.target` 返回一个指向构造方法或函数的引用。在普通的函数调用中， `new.target` 的值是 `undefined` 。









https://juejin.cn/post/7050492355056664612#comment







---

# 为什么箭头函数不能作为构造函数被new
结合`new`关键字的实现原理，会知道：`new`操作的第二步就是将函数中的`this`指向该对象。 但是由于箭头函数时没有自己的`this`，且`this`指向外层的执行环境，且不能改变指向，所以不能当做构造函数使用。


<LazyImage src="/images/codeImgFiles/javascript/new/new1.png" />



> 箭头函数没有自己的`this`，在使用构造函数new一个对象时无法绑定和修改`this`，同时箭头函数没有自己的`prototype`属性，无法将该属性赋给实例对象的`__proto__`。