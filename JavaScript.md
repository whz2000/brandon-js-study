## Data type

- Undefined 表示值是 undefined，当一个变量被定义但是未初始化，那么他的默认值就是 undefined

- Typeof 一个未声明的变量 也是返回 undefined

- typeof null 返回 object

- console.log(null == undefined); // true

- Var 声明会上升，const 和 let 不会

- ```javascript
  console.log(a); // 输出: undefined
  var a = 1;
  console.log(a); // 输出: 1
  
  // 实际执行过程等同于：
  var a;          // 声明，并自动初始化为 undefined
  console.log(a); // undefined
  a = 1;          // 赋值
  console.log(a); // 1
  
  // 暂时性死区(TDZ)示例
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 2;
  
  // 实际过程：
  // 1. 进入作用域，创建变量，但不初始化（进入TDZ）
  // 2. 执行到声明语句时才初始化
  // 3. 赋值
  
  ```

- NaN：Not a Number

  - 代表非法的数字，例如'a'/2
  - 任何包含 NaN 的操作结果都返回 NaN
  - NaN 不等于任何值，包括它自己

## 变量声明

- var 和 let 的区别
  



## number

### 八进制

- ES5
  使用 0 开头来表示八进制的数字，如 051 输出 41，如果使用的数字超出了八进制的范围如 058，那么将自动转化为十进制，输出 58

  ```javascript
  let a = 051;
  console.log(a); // 41
  let b = 058; // invalid octal
  console.log(b); // 58
  ```

- ES6
  使用 0o 开头来表示八进制的数字，如 0o51 输出 41，如果使用的数字超出了八进制的范围如 058，则报错*SyntaxError*

  ```javascript
  let c = 0o51;
  console.log(c); // 41 
  let d = 0o58;
  console.log(d); // SyntaxError
  ```

### 二进制

- ES5
  没有前缀能用来直接表示二进制的数字，只能使用 parseInt 函数来解析二进制数字

  ```javascript
  let e = parseInt('111',2);
  console.log(e); // 7
  ```

- ES6
  使用 0b 开头来表示二进制的数字

  ```javascript
  let f = 0b111;
  console.log(f); // 7
  ```



## String

### 字符串的表示方法

- 使用 ' 或 " 来包裹字符串

- ES6 引入``，使用反引号来包裹字符串

  - 在使用 ' 和 " 时可以不用转义

  - 可以使用变量 

    ```javascript
    let name = 'John';
    let message = `Hi, I'm ${name}.`;
    
    console.log(message); // Hi, I'm John.
    ```

- 转义特殊字符：使用反斜杠 \


### 字符串的类型转换

- 将非 str 类型转换为 str

  - String(n)
  - ” + n
  - n.toString()
    toString 对 null 和 undefined 无效

  如果将 boolean 类型转换为 str，就无法再转换回去

  ```javascript
  let status = false;
  let str = status.toString(); // "false"
  let back = Boolean(str); // true 因为只有空字符串会返回false
  ```


### 字符串比较

使用比较运算符，>、<、>=、<=、==

字符串的对比是基于 Unicode 编码值进行比较的

字符串比较规则

- 如果两个字符串长度相同，且每个字符的 Unicode 编码值都相等，则两个字符串相等
- 如果字符串长度不同，或某个字符的 Unicode 编码值不同，则按字符顺序逐个比较。

```javascript
let result = 'a' < 'B';
console.log(result); // false

console.log('a'.charCodeAt(0)); // 输出: 97
console.log('B'.charCodeAt(0)); // 输出: 66
```



## object

- 对象是一个无序的键值对集合

- 使用花括号创建一个空对象 let empty = {};

- 创建一个有值的对象

  ```javascript
  let person = {
      firstName: 'John',
      lastName: 'Doe'
  };
  ```

### 访问对象的属性

- 两种表示方法

  - 点的方式 ：objectName.propertyName
  - 类数组的方式[] ：objectName['propertyName']

- 当属性名称包含空格的时候，需要用引号来包裹，并且只能通过类数组的方式来访问，使用点会报错

  ```JavaScript
  let address = {
      'building no': 3960,
      street: 'North 1st street',
      state: 'CA',
      country: 'USA'
  };
  address['building no'];
  address.'building no'; // SyntaxError: Unexpected string
  ```

- 访问不存在的属性返回 undefined

- 修改对象属性的值：访问对象属性后通过等号赋值 

- 新增对象属性：直接赋值即可 person.age = 25

- 删除对象的属性：delete objectName.propertyName

- 检查对象属性是否存在：propertyName in objectName



## 值类型

### 两种值类型

- Primitive values 原始值包括：string、number、boolean、null、undefined、bigint、symbol
- Reference values 引用值包括：object

### 栈内存和堆内存

- 



## 数组

### 简介

- 有序列表
- 内部元素可以有多种数据类型的值
- 数组的长度是动态的

### 创建数组

两种方法

- array 构造器

  创建一个空数组：let scores = new Array()

  指定一个拥有初始长度的数组 ：let scores = Array(10)

  创建一个拥有初始元素的数组：let scores = new Array(9, 10, 8, 7, 6)

- 数组符号

  let arrayName = [element1, element2, element3, ...]

### 访问数组元素

通过 index 访问：arrayName[index]

修改数组元素的值，arrayName[index] = xx

### 获取数组长度

通过 length 属性：arrayName.length

### 数组基本操作

向数组的最后添加元素使用 push：arrayName.push( )

向数组的开头添加元素使用 unshift：arrayName.unshift( )

移除数组的最后一个元素并返回该元素值使用 pop：arrayName.pop( )

移除数组的第一个元素并返回该元素值使用 shift：arrayName.shift( )

查找元素索引使用 indexof：arrayName.indexof( ) 注：如果有多个名称相同的元素，那么会返回第一个找到的 index

判断一个变量是否是数组使用 Array.isArray( )

# Section 3. Operators

## 算数运算符

| Operator       | Sign |
| :------------- | :--- |
| Addition       | `+`  |
| Subtraction    | `-`  |
| Multiplication | `*`  |
| Division       | `/`  |

- 加

  - 如果运算符两边都是 str 类型，那么就是将他们连接起来

  - 如果运算符一边是 string 一边是 number，那么会将 number 隐式转换成 string 类型，然后将他们连接起来

  - 如果两边都是数字，那么就是正常的+运算

  - 特殊值的运算

    | First Value | Second Value | Result    | Explanation                               |
    | :---------- | :----------- | :-------- | :---------------------------------------- |
    | NaN         |              | NaN       | If either value is NaN, the result is NaN |
    | Infinity    | Infinity     | Infinity  | Infinity + Infinity = Infinity            |
    | -Infinity   | -Infinity    | -Infinity | -Infinity + ( -Infinity) = – Infinity     |
    | Infinity    | -Infinity    | NaN       | Infinity + -Infinity = NaN                |
    | +0          | +0           | +0        | +0 + (+0) = +0                            |
    | -0          | +0           | +0        | -0 + (+0) = +0                            |
    | -0          | -0           | -0        | -0 + (-0) = -0                            |

- 减

  - 如果有一边的值是 string、boolean、null、undefined 的话会先使用 Number( ) 转换成数字类型

  - 特殊值的运算

    | First Value | Second Value | Result    | Explanation                               |
    | :---------- | :----------- | :-------- | :---------------------------------------- |
    | NaN         |              | NaN       | If either value is NaN, the result is NaN |
    | Infinity    | Infinity     | NaN       | Infinity – Infinity = NaN                 |
    | -Infinity   | -Infinity    | -Infinity | -Infinity – ( -Infinity) = NaN            |
    | Infinity    | -Infinity    | Infinity  | Infinity                                  |
    | +0          | +0           | +0        | +0 – (+0) = 0                             |
    | +0          | -0           | -0        | +0 – (-0) = 0                             |
    | -0          | -0           | +0        | -0 – (-0) = 0                             |

- 乘

  - 如果有一边的值不是数字类型会先使用 Number( ) 转换成数字类型

  - 特殊值的运算

    | First Value | Second Value    | Result    | Explanation                               |
    | :---------- | :-------------- | :-------- | :---------------------------------------- |
    | NaN         |                 | NaN       | If either value is NaN, the result is NaN |
    | Infinity    | 0               | NaN       | Infinity * 0 = NaN                        |
    | Infinity    | Positive number | Infinity  | -Infinity * 100 = -Infinity               |
    | Infinity    | Negative number | -Infinity | Infinity * (-100) = -Infinity             |
    | Infinity    | Infinity        | Infinity  | Infinity * Infinity = Infinity            |

- 除

  - 如果有一边的值不是数字类型会先使用 Number( ) 转换成数字类型

  - 特殊值的运算

    | First Value | Second Value      | Result    | Explanation                               |
    | :---------- | :---------------- | :-------- | :---------------------------------------- |
    | NaN         |                   | NaN       | If either value is NaN, the result is NaN |
    | A number    | 0                 | Infinity  | 1/0 = Infinity                            |
    | Infinity    | Infinity          | NaN       | Infinity / Infinity = NaN                 |
    | 0           | 0                 | NaN       | 0/0 = NaN                                 |
    | Infinity    | A positive number | Infinity  | Infinity / 2 = Infinity                   |
    | Infinity    | A negative number | -Infinity | Infinity / -2 = -Infinity                 |



- 使用算数运算符操作对象

  - 如果值是对象的话，JavaScript 会调用 valueOf 方法来获取值

    ```javascript
    let energy = {
      valueOf() {
        return 100;
      },
    };
    
    let currentEnergy = energy - 10;
    console.log(currentEnergy); // 90
    ```

  - 如果一个对象没有 valueOf 方法，但是有 toString 方法来获取值用于计算

    ```javascript
    let energy = {
      toString() {
        return 50;
      },
    };
    
    let currentEnergy = energy - 10;
    console.log(currentEnergy); // 40
    ```

  - valueOf 和 toString 的区别

    - `valueOf` 用于返回对象的原始值（通常是数字），在数学运算或比较时优先调用
    - `toString` 用于返回对象的字符串表示，在字符串拼接或输出时优先调用
    - 当 JavaScript 需要将对象转换为原始值时，会按照以下顺序调用方法
      1. 如果对象有 `valueOf` 方法，并且返回一个原始值（非对象），则使用该值。
      2. 如果 `valueOf` 返回对象本身，或者对象没有 `valueOf` 方法，则调用 `toString` 方法。
      3. 如果 `toString` 也返回对象本身，则会抛出错误。

- 余数运算符

  - %

  - 特殊值的余数运算

    | First Value | Second Value | Result | Explanation               |
    | :---------- | :----------- | :----- | :------------------------ |
    | Infinity    | a number     | NaN    | Infinity % 2 = NaN        |
    | a number    | 0            | NaN    | 10 % 0 = NaN              |
    | Infinity    | Infinity     | NaN    | Infinity % Infinity = NaN |
    | a number    | Infinity     | Number | 10 % Infinity = 10        |
    | 0           | a number     | 0      | 0 % 10 = 0                |

  - 如果除数或者被除数不是数字类型，那会使用 Number( ) 进行转换



## 一元运算符

| Unary Operators | Name                         | Meaning                                     |
| :-------------- | :--------------------------- | :------------------------------------------ |
| `+x`            | Unary Plus                   | Convert a value into a number               |
| `-x`            | Unary Minus                  | Convert a value into a number and negate it |
| `++x`           | Increment Operator (Prefix)  | Add one to the value                        |
| `--x`           | Decrement Operator (Prefix)  | Subtract one from the value                 |
| `x++`           | Increment Operator (Postfix) | Add one to the value                        |
| `x--`           | Decrement Operator (Postfix) | Subtract one from the value                 |

- +x

  - 如果 x 是 number 类型，那么不会发生任何事情

  - 如果 x 是非数字类型，那么会使用 Number( ) 方法按照以下规则进行转换

    | Value                                                        | Result                                                       |
    | :----------------------------------------------------------- | :----------------------------------------------------------- |
    | [boolean](https://www.javascripttutorial.net/javascript-boolean-type/) | `false` to `0`, `true` to `1`                                |
    | [string](https://www.javascripttutorial.net/javascript-string/) | Convert the string value based on a set of specific rules    |
    | [object](https://www.javascripttutorial.net/javascript-objects/) | Call the `valueOf()` and/or `toString()` method to get the value to convert into a number |

- -x

  - 如果 x 是 number 类型，那么会取反
  - 如果 x 是非数字类型，那么会使用和 +x 相同的规则先转换成数字再取反

- ++x 和 x++ / --x 和 x--

  都是用来递增/递减

  - 区别
    - ++x 先递增再返回值，因此返回的是递增后的值
    - x++ 先返回值再递增，因此返回的是递增前的值

  ```javascript
  let a = 10
  let b = ++a
  console.log(b) // 11
  
  let a = 10
  let b = a++
  console.log(b) // 10
  ```

  - 如果运算符是对非数字类型操作，那么会先使用和+x 一样的规则进行转换后再进行运算

## 比较运算符

| Operator | Meaning                  |
| :------- | :----------------------- |
| <        | less than                |
| >        | greater than             |
| <=       | less than or equal to    |
| >=       | greater than or equal to |
| ==       | equal to                 |
| !=       | not equal to             |

- object运算

  当一个对象进行运算时，会先调用valueof方法，如果不存在则调用tostring方法，如果都不存在，则调用默认的tostring方法，在 JavaScript 中，所有的对象都继承自 `Object.prototype`，而 `Object.prototype.toString` 是一个内置方法。当你调用一个对象的 `toString` 方法时（无论是显式调用还是隐式调用），如果没有重写该方法，它会返回一个表示该对象类型的字符串，格式为 `[object Type]`，其中 `Type` 是对象的类型，它的类型是 `string`。

- null 和 undefined

  ```javascript
  console.log(null == undefined); // true
  ```

- NaN

  NaN和任何一个值对比的结果都是false，即使是他自己

  NaN和任何一个值进行不等于运算结果都是true

  ```
  console.log(NaN == 1); // false
  console.log(NaN == NaN); // false
  
  console.log(NaN != 1); // true
  ```

- === 和 !==

  和==、!=功能上是相同的，唯一的区别是=== 和 !==在比较时不会自动进行类型的转换

## 逻辑运算

- ! (Logical NOT)

  - If `a` is `undefined`, the result is `true`.
  - If `a` is `null`, the result is `true`.
  - If `a` is a number other than `0`, the result is `false`.
  - If `a` is `NaN`, the result is `true`.
  - If `a` is an [object](https://www.javascripttutorial.net/javascript-object/), the result is false.
  - If `a` is an empty string, the result is `true`. If `a` is a non-empty string, the result is `false`

  即，非空值取反为true，但是空对象取反仍为false

- ！！

  双重否定表肯定，结果和调用Boolean( )进行类型转换一致

- || (Logical OR)

  本质是返回第一个真值或最后一个假值，返回的是操作数的原始值

- && (Logical AND)

  本质是返回第一个假值或最后一个真值，返回的是操作数的原始值

- 混合运算时的优先级

  从高到低：

  1. Logical NOT (!)
  2. Logical AND (&&)
  3. Logical OR (||)

# Section 4. Control flow Statements

## 三元运算符

- if else的缩略版

```javascript
// 格式：condition ? expressionIfTrue : expressionIfFalse;

let message;
if (age >= 16) {
  message = 'You can drive.';
} else {
  message = 'You cannot drive.';
}

age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';
```

- 使用三元运算符执行多个操作，返回分隔符的最后一个值

```javascript
let authenticated = true;
let nextURL = authenticated
  ? (alert('You will redirect to admin area'), '/admin')
  : (alert('Access denied'), '/403');

// redirect to nextURL here
console.log(nextURL); // '/admin'
```

## while和do while

```JavaScript
// while
while (expression) {
    // statement
}

//do while
do {
  statement;
} while(expression);
```

区别：while是先判断后执行，do while是先执行后判断，所以do while最起码会执行一次循环体

## for循环

```javascript
for (initializer; condition; iterator) {
    // statements
}
```

执行顺序

![JavaScript for loop](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-for-loop.svg)



for 循环不包含循环体的例子

```javascript
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum); // 55

let sum = 0;
for (let i = 0; i <= 9; i++) {
  sum += i;
}
console.log(sum); // 45
```

执行顺序不一致

- 第一段代码中，`sum += i` 是在 `i++` 之后执行的，因此 `sum` 累加的是 `i` 更新后的值。即在迭代内执行的相加操作
- 第二段代码中，`sum += i` 是在 `i++` 之前执行的，因此 `sum` 累加的是 `i` 的当前值。即在循环体内执行的相加操作

## break

- 使用label语句来标记 `label: statement`

  使用label来标记for循环

  ```javascript
  outer: for (let i = 0; i < 5; i++) {
      console.log(i);
  }
  ```

  一旦定义了标签，就可以在break或continue语句中来引用它 `break [label]`

  使用场景：循环嵌套的时候，在内部循环内想要break外部循环

  ```javascript
  outer: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i + j == 4) {
        break outer;
      }
      console.log(i, j);
    }
  }
  ```

- 执行顺序 - 在for循环中使用break

  ![JavaScript break - for loop](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-break-for-loop.svg)

## continue

- 执行顺序：在for循环中使用continue

![JavaScript continue in a for loop](https://www.javascripttutorial.net/wp-content/uploads/2022/01/javascript-continue-for.svg)

## 逗号操作符

- 作用：接受两个表达式，从左到右对它们求值，然后返回右边表达式的值

- 格式：`leftExpression, rightExpression`

- 例子

  ```javascript
  let result = (10, 10 + 20);
  console.log(result); //30
  ```



# Section 5. Functions

## functions

- 声明一个方法

  ```JavaScript
  function functionName(parameters) {
      // function body
      // ...
  }
  ```

  - 方法的命名按照惯例使用驼峰命名法，并以动词开头，如 `getData()`
  - 一个方法能够接受0，1，甚至多个参数，多个参数使用逗号，来分隔

- 调用方法`functionName(arguments);`

- 形参和实参（Parameters vs. Arguments）：定义函数的时候指定的参数为形参，而在实际调用函数的时候，所传入的与形参相对应的参数为实参

- 返回值

  - JavaScript中的每个函数都隐式返回 `undefined`，除非你显示地指定返回值
  - 使用return语句来指定返回值 `return expression;`
  - 当执行return语句后函数不再往下执行，因此可以使用不带值的return来提前结束函数
  - 当需要返回多个值的时候，需要将这些值打包到一个数组或一个对象中

- arguments对象

  在函数内部，可以访问一个名为arguments的对象，该对象表示函数的命名参数。arguments对象的行为类似于数组，尽管它不是array类型的实例

  ```JavaScript
  function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  console.log(add(1, 2)); // 3
  console.log(add(1, 2, 3, 4, 5)); // 15
  ```

- 函数提升

  函数提升是JavaScript引擎在执行函数声明之前将其物理移动到代码顶部的一种机制，因此可以在函数声明之前调用函数

## 

# Section 9. Promises & Async/Await

## promise



