JS的数据类型可以根据在计算机中的存储位置分为两种：

- 基本数据类型：Number、String、Boolean、Null、 Undefined、Symbol（ES6）,BigInt(ES10)
- 引用数据类型：Object



补充说明

> Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。

> BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。




# 基本数据类型

基本数据类型是指存放在栈中的简单数据段，数据大小确定，内存空间大小可以分配，它们是直接按值存放的，所以可以直接按值访问

# 引用数据类型

引用数据类型也叫对象数据类型，包括function，object，array，data，RegExp等**可以使用new创建的数据**，又叫对象类型，他们是存放在堆(heap)内存中的数据。

当我们需要访问引用类型的值时，首先得从栈中获得该对象的地址指针，然后再从堆内存中取得所需的数据。






# 概念拓展:

## 堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中：

- 在数据结构中，栈中数据的存取方式为先进后出。
- 堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。

## 在操作系统中，内存被分为栈区和堆区：

- 栈区内存由**编译器自动分配释放**，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。
- 堆区内存一般由**开发者分配释放**，若开发者不释放，程序结束时可能由垃圾回收机制回收。



---
# Null 和 Undefined 的区别
一图秒杀

![](https://secure2.wostatic.cn/static/ms6T45S4XUSR1tyrv8azKG/image.png?auth_key=1742899825-dkWQybX6WgGsxAumMgFRtC-0-14b70107e8181545e29dffbfb8261f78)

---



> 前面我们介绍了JavaScript的八种数据类型，这里我们区分一下null和undefined。



undefined和null这两种数据类型内都只分别包含一个值，也就是undefined和null。
这两种不同类型的值，既有着不同的语义和使用场景，又表现出较为相似的行为。





---



## undefined

undefined表示**未定义的值**。

这个值的语义是：希望表示一个变量最原始的状态，而非认为操作的结果。



---

这里罗列一下可能出现undefined的场景。

### 声明一个变量，但是没有赋值

```JavaScript
var foo;
console.log(foo); // undefined

```

> 这里undefined表示   自从声明了以后，这个变量从来没有使用过，也没有定义过任何有效的值。



---

### 访问对象上不存在的属性或未定义的变量

```JavaScript
console.log(Object.foo); // undefined
console.log(typeof demo); // undefined

```



> 未声明的变量执行typeof操作符返回了undefined值。



---

### 函数定义了形参，但是没有传递实参

```JavaScript
//函数定义了形参 a
function fn(a) {
    console.log(a); // undefined
}
fn(); //未传递实参

```





---

### 使用void对表达式求值

```JavaScript
void 0 ; // undefined
void false; // undefined
void []; // undefined
void null; // undefined
void function fn(){} ; // undefined

```

**ECMAScript** 明确规定 **void 操作符 对任何表达式求值都返回 undefined **，这和函数执行操作后没有返回值的作用是一样的，JavaScript 中的函数都有返回值，当没有 return 操作时，就默认返回一个原始的状态值，这个值就是 undefined，表明函数的返回值未被定义。





---

## null

null，字面意思：**空值**。

这个值的语义是，希望表示一个对象被认为的重置为空对象，而非一个变量最原始的状态。

在内存里的表示就是：**栈中的变量没有指向堆中的内存对象**。





罗列一下可能出现null的场景：

## 创建对象时初始化对象

如果定义的变量将用来保存对象，那么最好将该变量初始化为null

## 将弃用对象设为null以释放引用

当一个数据不再被需要的时候，将其值设置为null，从而释放其对堆内存存储的数据的引用（也叫 **解除引用**）。



** 注意！！！**

解除引用不代表直接释放内存！！

解除引用的真正作用是让值脱离执行环境，以便垃圾回收机制在下次运行的时候将其回收（该数据身上不存在引用关系时回收内存空间）。（这里联系垃圾回收机制的算法迭代（引用计数法→标记清除法→标记整理法））

同时解除引用还有助于消除有可能出现的循环引用的情况。这种做法适用于大多数全局变量和全局对象的属性，局部变量会在它们离开执行环境时（函数执行完时）自动被解除引用。







---

一些需要注意的点：

**`typeof`**

```JavaScript
typeof null  // 'object'
typeof undefined  // 'undefined'

```

**`== 与 ===`**

```JavaScript
null == undefined  // true
null === undefined  // false
!!null === !!undefined  // true

```



**`+ 运算 与 Number()`**

```JavaScript
let a = undefined + 1  // NaN
let b = null + 1  // 1
Number(undefined)  // NaN
Number(null)  // 0

```



**`JSON`**

```JavaScript
JSON.stringify({a: undefined})  // '{}'
JSON.stringify({b: null})  // '{b: null}'
JSON.stringify({a: undefined, b: null})  // '{b: null}'

```







---

## 考点
为什么typeof null == object

在JavaScript的原始版本中，数据都以`32位`存储，前`3位`为数据类型的标记，其他位为具体值。而对象类型则前`3位`为`000`作为类型标记位。

null是JavaScript里的一个特殊值，它用来对应`C`中的`空指针`的作用。并用`全0（32位）`表示。

当typeof识别的时候，检查到`null`的前三位（000），错误认为它是`object`类型。

