之前我们介绍了JavaScript里的八种数据类型，这篇文章主要偏向于其中的number类型中的一个特殊值来讨论的→**`NaN`**

---



# 什么是NaN

一般来说，在JavaScript存在这样的关系

```JavaScript
var a = 'foo';

```



将上面代码看成  type\value\variable这一关系组合，再进行解释就是：

```JavaScript
//容器 `variable` a 装着 `value` 'foo', `value` 'foo' 的`type`是string
```





NaN在MDN里是这么被描述的：

> The global NaN property is a value representing Not-A-Number.

意思是是说：`NaN`是一个放在 global（浏览器里是window）对象里的一个value，是一个代表`Not-A-Number`的value。



在《You Don't Know JS》里这一描述：

> NaN literally stands for "not a number", though this label/description is very poor and misleading, It would be much more accurate to think of NaN as being "invalid number," "failed number," or even "bad number," than to think of it as "not a number."

> NaN 的字面意思是“不是数字”，尽管这个标签/描述非常糟糕且具有误导性，但将 NaN 视为“**无效数字**”、“**失败数字**”甚至“错误数字”会更准确。 而不是将其视为“不是数字”。



再结合一下知道，NaN就是一个`value`，这个`value`的type是**number**。


--- 
#  isNaN 和 Number.isNaN 函数的区别
上面文章我们简单了解了什么是NaN，那么这里我们讨论如何判断NaN。



---

# isNaN()



当年JavaScript作者创造出NaN这个东西的时候就附带了这个办法来判别，但是注意它的意义：

`判别目标数据是否是`**`无效数字`**

这里面包含两个条件：先是数字、再是无效的数字（特指NaN）

因此就出现了一些奇奇怪怪的代码：

```JavaScript
isNaN(NaN); // true

isNaN('A String'); // true

isNaN(undefined); // true

isNaN({}); // true

```

确实啊，字符串、undefined、对象等都不是无效数字啊，没毛病，所以它的打印结果是`true`。


---

## Number.isNaN()

ES6直接重写了isNaN()方法，使得它现在能准确用来判断NaN.

```JavaScript
Number.isNaN(NaN); // true

Number.isNaN('A String'); // false

Number.isNaN(undefined); // false

Number.isNaN({}); // false

```







---

## 不用ES6的Number.isNaN()，怎么正确识别？

就是手动实现Number.isNaN()的效果。



```JavaScript
if (!Number.isNaN) {
    Number.isNaN = function (n) {
        return (
            typeof n === 'number' && window.isNaN(n)
        )
    }
}
```

就是手动弥补传统isNaN不能判别类型的缺陷。



还有一种更简单的实现方法。

```JavaScript
if (!Number.isNaN) {
    Number.isNaN = function(n) {
        return n !== n;
    };
}
```









---

拓展阅读：

https://juejin.cn/post/6844903507368083469#heading-5

