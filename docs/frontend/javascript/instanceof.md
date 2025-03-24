# 原理

沿着原型链一路向上查找。查找需要判断的对象的隐式原型是否能指向猜测类型的显式原型，或者沿着原型链找到匹配原型。如果找到，则表示左值是右值的实例对象



# 手写实现

```JavaScript
// instanceof 判别变量类型
function myInstanceof(leftValue, rightValue) {
    let rightProto = rightValue.prototype   //取到右边表达式的 prototype 
    leftValue = leftValue.__proto__         //取到左边表达式的__proto__值
    while (true) {
        if (leftValue === null) {
            return false
        }
        if (leftValue === rightProto) {
            return true
        }
        leftValue = leftValue.__proto__
    }
}

let a = new String('I am String')
console.log(myInstanceof(a, Number));
```



