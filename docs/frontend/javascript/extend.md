::: tip 继承的简短描述>
从工程学角度想，继承和多态的形式有便于逻辑的复用，为了实现这样的设计，再结合javascript的特性，所以ES6的class语法糖的继承和多态的实现，本质上还是通过原型链去实现的。
:::

相较于C和JAVA这类面向类的语言，JS没有真正意义上的类的概念，都是通过`prototype`原型链去**模仿实现**继承和多态的效果。


事实上无论是ES5的prototype模拟类，还是ES6的class语法糖，这些都不是真正的类，真正的子类是对父类的完全复制，而JS不是。ES6的class本质上还是通过Object.create（）去关联两者的prototype。


---

这里主要展示了ES5及之前的基本继承方法，参考文章为：



https://juejin.cn/post/6844903696111763470#heading-0



然后下面是我自己写的6种继承

::: details 点击查看完整代码
```JavaScript



// // 1. 原型链继承
function SuperType() {
    this.name = '原型链继承'

}

SuperType.prototype.sayName = function () {
    return this.name
}

function SubType() {

}
SubType.prototype = new SuperType()


var instance = new SubType()
console.log(instance.sayName()); //原型链继承



// 可能存在的问题
function SuperType() {
    this.name = '原型链继承'
    this.color = ['pink', 'red', 'bule']

}

SuperType.prototype.sayName = function () {
    return this.name
}
SuperType.prototype.sayColor = function () {
    return this.color
}

function SubType() {

}
SubType.prototype = new SuperType()


var instance = new SubType()
console.log(instance.sayColor());  //[ 'pink', 'red', 'bule' ]
instance.color.push('black')
console.log(instance.sayColor());  //[ 'pink', 'red', 'bule', 'black' ]


var instance2 = new SubType() 
console.log(instance2.color);  //[ 'pink', 'red', 'bule', 'black' ]
console.log(instance2.sayColor());  //[ 'pink', 'red', 'bule', 'black' ]


// --------------------------------------------------------------------------


// 2. 经典继承      (构造函数继承)
function SuperType() {
    this.name = '经典继承'
    this.sayName = function () {
        return this.name
    }
}

function SubType() {
    SuperType.call(this)
}

var instance = new SubType()
console.log(instance.sayName())   //经典继承
console.log(instance.name);   //经典继承




//可能存在的问题
function SuperType() {
    this.name = '经典继承'
    this.age = '111'
    this.sayName = function () {
        return this.name
    }
}

SuperType.prototype.sayAge = function () {
    return this.age
}

function SubType() {
    SuperType.call(this)
}

var instance = new SubType()  
console.log(instance.sayName())  //经典继承
console.log(instance.name);  //经典继承
console.log(instance.sayAge())  //无法获取其原型上的方法



 





// --------------------------------------------------------------------------

// // 3.组合继承

SuperType.prototype.sayName = function () {
    return this.name
}
function SuperType() {
    this.name = '组合继承'
    this.num = '111'
    this.sayNum = function () {
        return this.num
    }
}


SubType.prototype = new SuperType()

function SubType() {
    this.name = '组合继承子类'
    SuperType.call(this)
}


var instance = new SubType()

console.log(instance.sayNum());
console.log(instance.sayName());









// 存在问题
// 会存在两份父类实例中的属性和方法
// 这个不知道怎么展示


// --------------------------------------------------------------------------


// 4. 原型式继承

function aaaaaa(o) {
    function F() { }
    F.prototype = o
    return new F()
}

let Person = {
    name: '原型式继承',
    age: '11'
}

let anotherPerson = aaaaaa(Person)
console.log(anotherPerson.name);
anotherPerson.name = '原型式继承1'
console.log(anotherPerson.name);
console.log(anotherPerson.__proto__);


let anotherPerson1 = aaaaaa(Person)
console.log(anotherPerson1.name);









// 缺点 （无法传递参数、引用类型数据乱用问题

function aaaaaa(o) {
    function F() { }
    F.prototype = o
    return new F()
}

let Person = {
    color:['red','bule','pink'],
    age:11
}

let anotherPerson = aaaaaa(Person)
console.log(anotherPerson.color);
anotherPerson.color.push('black')
console.log(anotherPerson.color);



let anotherPerson1 = aaaaaa(Person)
console.log(anotherPerson1.color);





// 拓展：Object.create()函数的原理和这个很像
// （要在浏览器打印)

var Person = {
    name:'拓展',
    color:['red','bule','pink']
}

let anotherPerson = Object.create(Person,{
    sex:{value:'男'},
    age:{value:'12'}
})
console.log(anotherPerson);
console.log(anotherPerson.__proto__);



// --------------------------------------------------------------------------
// 5. 寄生式继承


function createPerson(a) {
    let clone = Object.create(a)
    clone.sayHello = function () {
        console.log('hello world');
    }
    return clone
}

let obj = {
    name: '寄生式继承',
    color:['red','bule','pink']
}
let anotherPerson1 = createPerson(obj)
console.log(anotherPerson1.name);       //寄生式继承
console.log(anotherPerson1.color);      //[ 'red', 'bule', 'pink' ]
anotherPerson1.color.push('black')
console.log(anotherPerson1.color);      //[ 'red', 'bule', 'pink', 'black' ]


// 存在问题

let anotherPerson2 = createPerson(obj)  //[ 'red', 'bule', 'pink', 'black' ]
console.log(anotherPerson2.color);




// --------------------------------------------------------------------------
// 6. 寄生组合继承

// 组合继承最大的缺陷在于：会调用两次父类的构造函数
// 一次是设置子类实例的原型的时候:  SubType.prototype = new SuperType();
// 一次是在创建子类实例的时候:var instance = new SubType()          这里是会执行SubType()里面的SuperType.call(this)



function SuperType(name,age){
    this.name=name,
    this.age = age,
    this.color = ['red', 'green', 'yellow']
}
SuperType.prototype.sayName = function(){
    console.log(this.name);
}


let anotherPrototype = Object.create(SuperType.prototype)
anotherPrototype.constryctor = SubType  //   ！

function SubType(name,age){
    SuperType.call(this,name)
    this.age = age
}
SubType.prototype = anotherPrototype
SubType.prototype.SayAge = function(){
    console.log(this.age);
}

var instance1 = new SubType('kk', 18)
instance1.color.push('pink')
console.log(instance1.color);
instance1.sayName()
instance1.SayAge()

var instance2 = new SubType('zow', 20)
console.log(instance2.color);
instance2.sayName()
instance2.SayAge()



// 总结：  1.原型链问题（prototype、constract）

```
:::

---
<h1>ES5和ES6的继承除了写法以外还有什么区别</h1>

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/20



> 这个问题的本质，是探讨ES5实现继承效果 和 ES6的class语法糖实现继承效果，二者有什么区别



## `class`存在类似变量提升的效果

::: details 点击查看完整代码
```JavaScript
var Foo = function() {
  this.foo = 21;
};

{
  const foo = new Foo(); // ReferenceError: Foo is not defined
  class Foo {
    constructor() {
      this.foo = 37;
    }
  }
}
```
:::

## `class`内部会自动开启严格模式

::: details 点击查看完整代码
```JavaScript
// 引用一个未声明的变量
function Bar() {
  baz = 42; // it's ok
}
const bar = new Bar();

class Foo {
  constructor() {
    fol = 42; // ReferenceError: fol is not defined
  }
}
const foo = new Foo();
```
:::

## `class`内的属性和方法都是**不可枚举**的

::: details 点击查看完整代码
```JavaScript
// 引用一个未声明的变量
function Bar() {
  this.bar = 42;
}
Bar.answer = function() {
  return 42;
};
Bar.prototype.print = function() {
  console.log(this.bar);
};
const barKeys = Object.keys(Bar); // ['answer']
const barProtoKeys = Object.keys(Bar.prototype); // ['print']

class Foo {
  constructor() {
    this.foo = 42;
  }
  static answer() {
    return 42;
  }
  print() {
    console.log(this.foo);
  }
}
const fooKeys = Object.keys(Foo); // []
const fooProtoKeys = Object.keys(Foo.prototype); // []
```
:::
