/**
数据类型：null、undefined、boolean、number、string、symbol、bigint、object
*/

// 一个变量定义了但是未初始化，那么默认值就是 undefined
let counter
console.log(counter) // undefined
console.log(typeof counter) // undefined

// null 是一个特殊的对象
console.log(typeof null) // object

// null 和 undefined 的值是相等的
console.log(null == undefined); // true

// NaN : not a number
// 任何带有NaN的操作都返回NaN 
// NaN不等于任何值，包括它自己
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false

// boolean
console.log(Boolean(Infinity))

// symbol
let s1 = Symbol() // create a symbol
console.log(s1)

// bigint
// bigint类型表示大于2的 53 次方 - 1的整数。要定义一个bigint类型的数字，你需要在数字的末尾加上字母n:
let pageView = 9007199254740991n;
console.log(typeof(pageView)); // 'bigint'
