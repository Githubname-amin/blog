# 相关文章

[JavaScript 世界万物诞生记](https://zhuanlan.zhihu.com/p/22989691)
> 阅读引导：神文，比较有趣味的讲解了原型和原型链的关系，阅读完后作为个人的理解大纲，但是不建议面试的时候按照这种话术讲解，太耗时。

[原型和原型链](https://juejin.cn/post/6844903797039300615)
> 阅读引导：结合实例的使用，对于每个知识点有详细展开的讲解，推荐。




# 相关图片

冴羽大佬文章[JavaScript 深入之从原型到原型链](https://juejin.cn/post/6844903472836395022)
> 阅读引导：注意大佬在文章中对于关键点的举例（prototype，__proto__，construct，实例和实力对象的关系）









这个图片是经典的从构造函数到显式原型再到Object最终到null的过程

<LazyImage src="/images/codeImgFiles/javascript/props/props1.png" alt="props讲解自绘图" />





这张图是从null到出现构造函数Object（生成各种实例对象），再到制造机器的机器Function（生成机器）

<LazyImage src="/images/codeImgFiles/javascript/props/props2.JPG" alt="props讲解自绘图" />




# 补充

这里给一道面试题

```JavaScript
function Foo() {
    getName = function (){
        console.log(1)
    }
    return this
}

Foo.getName = function () {
    console.log(2)
}

Foo.prototype.getName = function(){
    console.log(3)
}

var getName = function (){
    console.log(4)
}

function getName() {
    console.log(5)
}
// 1
Foo.getName()
//2
getName()
//3
Foo().getName();
//4
getName();
//5
new Foo.getName()
//6
new Foo().getName()
//7
new new Foo().getName()

```

- 答案

  2  4  1 1  2  3  3

