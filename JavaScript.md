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

## 函数与其他数据类型享有同等的地位

- 将函数赋值给变量

- 将函数作为参数传递给另一个函数

  ```JavaScript
  function add(a, b) {
      return a + b;
  }
  
  let sum = add;
  
  function average(a, b, fn) {
      return fn(a, b) / 2;
  }
  
  let result = average(10, 20, sum);
  
  console.log(result);
  ```

- 函数作为其他函数的返回值

## 匿名函数

匿名函数是指没有名称的函数。它通常在其他函数或表达式中定义，并作为值传递或直接调用。

需要注意如果没有将匿名函数赋值给变量，那么需要用()来包裹它，否则会报错

```javascript
(function () {
   //...
});
```

- 特点

  - **没有名称**：匿名函数没有标识符，无法通过名称直接调用。
  - **作为值使用**：匿名函数可以赋值给变量、作为参数传递或作为返回值。
  - **立即调用**：匿名函数可以定义后立即调用（IIFE，立即调用函数表达式）。

- 用法

  - 赋值给变量

    ```JavaScript
    let greet = function(name) {
      console.log('Hello, ' + name);
    };
    
    greet('John'); // 输出: Hello, John
    ```

  - 作为参数传递

    ```javascript
    setTimeout(function() {
      console.log('Executed after 1 second');
    }, 1000);
    ```

  - 作为返回值

    ```javascript
    function createCounter() {
      return function() {
        let count = 0;
        return ++count;
      };
    }
    
    let counter = createCounter();
    console.log(counter()); // 输出: 1
    console.log(counter()); // 输出: 2
    ```

  - 立即调用函数表达式

    匿名函数可以定义后立即调用，通常用于创建一个独立的作用域。

    ```javascript
    (function() {
      console.log('IIFE executed');
    })();
    ```

- 箭头函数

  匿名函数的一种简洁写法

  ```JavaScript
  let add = (a, b) => a + b;
  console.log(add(2, 3)); // 输出: 5
  ```

## 递归函数

- 定义：在函数内部自己调用自己

  ```JavaScript
  function recurse() {
      if(condition) {
          // stop calling itself
          //...
      } else {
          recurse();
      }
  }
  ```

## 默认参数

```javascript
function fn(param1=default1, param2=default2,..) {
}
```

- 如果有多个默认值，只想传参最后一个，那么前面的需要传undefined

  ```javascript
  function createDiv(a = 1, b = 2, c = 3) {
    const div = [a, b, c];
    return div;
  }
  
  console.log(createDiv(undefined,undefined,4)); // [1,2,4]
  ```

- 默认值使用参数

  ```JavaScript
  function add(x = 1, y = x, z = x + y) {
      return x + y + z;
  }
  
  console.log(add()); // 4
  ```

- arguments 指的是实际的传参

  ```javascript
  function add(x, y = 1, z = 2) {
      console.log( arguments.length );
      return x + y + z;
  }
  
  add(10); // 1
  add(10, 20); // 2
  add(10, 20, 30); // 3
  ```

# Section 6. Objects & Prototypes

## object-methods

- 在对象中定义一个方法属性

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    }
};

// ES6引入了更加简洁的定义方式
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Hello, World!');
    }
};
```

- this

  在方法内部，this值引用调用该方法的对象。因此，可以使用this值访问属性

  ```JavaScript
  let person = {
      firstName: 'John',
      lastName: 'Doe',
      greet: function () {
          console.log('Hello, World!');
      },
      getFullName: function () {
          return this.firstName + ' ' + this.lastName;
      }
  };
  
  
  console.log(person.getFullName()); // 'John Doe'
  ```

  如果一个函数是对象的属性，那么它叫做方法

  函数是一段独立的代码块，可以通过函数名直接调用，函数的上下文（`this`）通常是全局对象（在浏览器中是`window`），除非使用`call`、`apply`或`bind`显式绑定。

  方法是作为对象属性的函数，方法通过对象调用，通常使用`对象.方法名()`的形式，方法的上下文（`this`）通常是调用它的对象

  总结：方法是对象的属性，调用时`this`指向该对象；函数独立存在，调用时`this`通常指向全局对象。

## 构造函数

### 构造函数的定义

使用构造函数定义自定义类型，并使用new操作符从该类型创建多个对象

构造函数具有以下约定：

- 大写字母开头，如`Person`

- 只能通过`new`关键字调用

> [!NOTE]
>
> ES6引入了 `class` 关键字， 允许定义自定义类型。类只是构造函数之上的语法糖，有一些增强

```JavaScript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 等同于

function Person(firstName, lastName) {
    // this = {};

    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    // return this;
}

let person = new Person('John','Doe');

// 等同于

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
```

### 在构造函数中添加方法

```JavaScript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person = new Person("John", "Doe");
console.log(person.getFullName()); // John Doe
```

### 构造函数的返回值

- **默认行为：隐式返回`this`**

  - 当使用`new`关键字调用构造函数时，构造函数会隐式创建一个新对象，并将`this`绑定到这个新对象。
  - 如果没有显式的`return`语句，构造函数会隐式返回`this`，即新创建的对象。

  ```javascript
  function Person(name) {
      this.name = name;
      // 没有 return 语句，隐式返回 this
  }
  
  const person = new Person("Alice");
  console.log(person.name); // 输出 "Alice"
  ```

-  **如果`return`返回一个对象**

  - 如果构造函数中有`return`语句，并且`return`的是一个对象（包括数组、函数等），那么构造函数会返回这个对象，而不是默认的`this`。
  - 这意味着新创建的对象会被丢弃，`return`的对象会替代它。

  ```JavaScript
  function Person(name) {
      this.name = name;
      return { name: "Bob" }; // 返回一个对象
  }
  
  const person = new Person("Alice");
  console.log(person.name); // 输出 "Bob"，而不是 "Alice"
  ```

- **如果`return`返回一个非对象值**

  - 如果`return`返回的是一个非对象值（如字符串、数字、布尔值、`null`、`undefined`等），这个返回值会被忽略，构造函数仍然会返回默认的`this`。

  ```JavaScript
  function Person(name) {
      this.name = name;
      return 42; // 返回一个非对象值
  }
  
  const person = new Person("Alice");
  console.log(person.name); // 输出 "Alice"，42 被忽略
  ```

### new.target 属性

ES6 引入的 `new.target` 属性，主要为了避免调用构造函数时不使用`new`关键字

如果未使用new关键字，构建函数的this会绑定到全局对象，这样就会导致访问不到对象的属性和方法

```JavaScript
let person = Person('John','Doe');
console.log(person.firstName); // TypeError: Cannot read property 'firstName' of undefined
person.getFullName(); // TypeError: Cannot read property 'getFullName' of undefined
```

如果用new关键字调用构造函数，则`new.Target`返回函数的引用。否则返回`undefined`

```JavaScript
function Person(firstName, lastName) {
    console.log(new.target);

    this.firstName = firstName;
    this.lastName  = lastName;

    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
}

let person = Person("John", "Doe"); // undefined
let person = new Person("John", "Doe"); // [Function: Person]
```

通过在构造函数内判断`new.Target`的值可以让函数调用的写法更有灵活性

```JavaScript
// 如果调用函数没使用new关键字，那么返回一个new person对象
function Person(firstName, lastName) {
    if (!new.target) {
        return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
}

let person = Person("John", "Doe");

console.log(person.firstName);
```

## prototype

### 介绍

- JavaScript 对象通过 prototype 实现继承

- 每个对象都有一个指向 prototype 的属性，prototype 本身也是对象，形成原型链，直到末端的原型值为 `null`

- 访问某个属性的时候，如果所访问的对象本身不存在该属性，则会根据原型链进行搜索

- 当函数作为对象的属性时称为方法

### prototype 图解

JavaScript 具有内置的 `Object()` 函数，它的类型是方法

`Object.prototype` 指向一个匿名对象

`Object.prototype`对象的 constructor 又指向了 Object 函数`Object.prototype.constructor === Object`

![JavaScript Prototype](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype.svg)

 `[[Prototype]]` 是对象的一个内部属性，它的作用是链接到原型链的上游对象，实现基于原型的继承机制

![img](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-calling-a-method.svg)

### 获取 prototype

- `p1.__proto__`
- `Object.getPrototypeOf(p1)`
- `p1.constructor.prototype`

## 构造函数/原型模式

### 构造函数模式和原型模式

- 构造函数定义对象的属性
- 原型模式定义对象的方法

### 构造器+原型的示例

```javascript
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};
```

## 原型继承

```JavaScript
// 定义一个对象
let person = {
    name: "John Doe",
    greet: function () {
        return "Hi, I'm " + this.name;
    }
};
```

默认情况下，JavaScript 有一个内置的 `Object` 函数以及一个匿名对象，该对象通过 `Object.prototype` 引用

![JavaScript prototypal inheritance](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-prototypal-inheritance.svg)

Person 对象拥有一个指向被 Object 函数引用的匿名函数的链接，由 [[Prototype]] 表示

使用 `__proto__` 属性访问对象的原型，修改该属性能够修改指向的原型

`Object.getPrototypeOf()` 方法返回对象的原型



## this 关键字

- JavaScript 中 this 引用的是当前调用该函数的对象

```JavaScript
let counter = {
  count: 0,
  next: function () {
    return ++this.count;
  },
};

counter.next();

// 假设有一个对象 counter ，它具有一个方法 next() 。当调用 next() 方法时，可以访问 this 对象
// 在 next() 函数内部， this 引用了 counter 对象
// next() 是 counter 对象的属性，因此在 next() 函数内部， this 引用的是 counter 对象。
```

- 在全局环境下，`this` 引用的是全局对象，在浏览器中是 `window` 对象，在 Node.js 中则是 `global` 对象

### 函数上下文

JavaScript 中有多种不同的函数调用方式，每次函数调用都定义了自己的上下文。因此， `this` 的表现会有所不同

- 简单函数调用方式

  ```JavaScript
  function show() {
     console.log(this === window); 
  }
  
  show();
  ```

  在非严格模式下，上面的 this 指向全局对象，与执行 `window.show()` 操作相同

  严格模式下，则会将 `this` 设置为 `undefined`

- 方法调用

  ```javascript
  let car = {
      brand: 'Honda',
      getBrand: function () {
          return this.brand;
      }
  }
  
  console.log(car.getBrand()); // Honda
  ```

  调用对象的方法时，会将 `this` 设置为拥有该方法的对象

  ```JavaScript
  // 在上述案例的基础上，将对象方法赋值给一个变量
  let brand = car.getBrand
  // 通过变量调用方法
  console.log(brand()); // undefined
  // 这种调用方法就是简单的函数调用方式，this 指向的是全局对象或者 undefined，因此得到的结果就是 undefined
  ```

  要解决此问题，使用 `Function.prototype` 对象的 `bind()` 方法。 `bind()` 方法创建一个新函数，该函数的 `this` 关键字被设置为指定的值

  ```javascript
  let brand = car.getBrand.bind(car);
  console.log(brand()); // Honda
  
  // 新案例，通过 bind 方法将 this 设置为其他的对象
  let car = {
      brand: 'Honda',
      getBrand: function () {
          return this.brand;
      }
  }
  
  let bike = {
      brand: 'Harley Davidson'
  }
  
  let brand = car.getBrand.bind(bike);
  console.log(brand());
  ```

- 构造函数调用

  使用 `new` 关键字创建函数对象的实例时，将该函数用作构造函数，创建一个新的对象并将 this 设置为新创建的对象

  ```javascript
  function Car(brand) {
      this.brand = brand;
  }
  
  Car.prototype.getBrand = function () {
      return this.brand;
  }
  
  let car = new Car('Honda');
  console.log(car.getBrand()); // Honda
  
  // 如果是简单调用，即省略 new 关键字的情况下，this 指向全局对象，所以 bmw.brand 返回 undefined，而globalthis.brand = BWN
  var bmw = Car('BMW');
  console.log(bmw.brand);
  // => TypeError: Cannot read property 'brand' of undefined
  
  // 为了确保 Car() 函数始终通过构造函数调用方式被调用，可以在 Car() 函数的开头使用 instanceof 进行检查
  function Car(brand) {
      if (!(this instanceof Car)) {
          throw Error('Must use the new operator to call the function');
      }
      this.brand = brand;
  }
  ```

  ES6 引入了一个名为 `new.target` 的元属性，用来检测一个函数是作为简单调用还是作为构造函数被调用。

  ```javascript
  function Car(brand) {
      if (!new.target) {
          throw Error('Must use the new operator to call the function');
      }
      this.brand = brand;
  }
  ```

- 间接调用

  函数是对象，是 Function 类型的实例

  `Function` 类型有两个方法： `call()` 和 `apply()` 。这些方法允许您在调用函数时设置 `this` 值

  ```javascript
  function getBrand(prefix) {
      console.log(prefix + this.brand);
  }
  
  let honda = {
      brand: 'Honda'
  };
  let audi = {
      brand: 'Audi'
  };
  
  getBrand.call(honda, "It's a "); // It's a Honda
  getBrand.call(audi, "It's an "); // It's an Audi
  ```

### 箭头函数

ES6 引入了一个名为箭头函数的新概念。在箭头函数中，JavaScript 会根据词法作用域设置 `this`

这意味着箭头函数不会创建自己的执行上下文，而是从定义箭头函数的外部函数中继承 `this`

```javascript
let getThis = () => this;
console.log(getThis() === window); // true
// 在此示例中， this 的值被设置为全局对象，即在 Web 浏览器中为 window 
```



## globalThis

在不同的运行环境下的全局对象不一样，比如浏览器环境下为 `window`、Node.js 是 `global`，ES2020 引入 `globalThis` 来实现跨环境访问全局对象



## 对象属性

- 对象有两种类型的属性：数据属性和访问器属性

### 数据属性

JavaScript 通过用两对方括号括起来的内部属性来指定对象属性的特征，例如 `[[Enumerable]]`

数据属性具有 4 个属性

- `[[Configurarable]]` \- 决定某个属性是否可以重新定义或通过 `delete` 操作符移除
- `[[Enumerable]]` - 表示某个属性是否可以在 `for...in` 循环中返回
- `[[Writable]]` - 指定属性的值可以被更改
- `[[Value]]` - 包含属性的实际值

默认情况下，前 3 个属性都为 true，`[[Value]]` 属性为 undefined

使用 `Object.defineProperty()` 方法来定义或修改属性

```javascript
'use strict';

let person = {};

Object.defineProperty(person, 'ssn', {
    configurable: false,
    value: '012-38-9119'
});

delete person.ssn;
```

在定义时如果未指定属性值，那么默认为 false

```javascript
let person = {}

Object.defineProperty(person, 'ssn', {
    value: 123
})

console.log(Object.getOwnPropertyDescriptor(person, 'ssn'))
// { value: 123, writable: false, enumerable: false, configurable: false }
```

当一个属性是 false 的时候，就无法再更改为 true

```javascript
'use strict';

let person = {
    name: 'b'
}

Object.defineProperty(person, 'ssn', {
    writable: true,
    value: 123
})

person.ssn = 456

console.log(person.ssn)

Object.defineProperty(person, 'ssn', {
    writable: false
})

person.ssn = 789 // Cannot assign to read only property 'ssn' of object '#<Object>'

console.log(person.ssn)
```

### 访问器属性

访问器具有4个属性：

- `[[Configurable]]`
- `[[Enumerable]]`
- `[[Get]]`：当从访问器属性读取数据时， `[[Get]]` 函数会自动被调用以返回一个值。 `[[Get]]` 函数的默认返回值为 `undefined`
- `[[Set]]`：如果您为访问器属性赋值， `[[Set]]` 函数将自动被调用

要定义一个访问器属性，您必须使用 `Object.defineProperty()` 方法

```JavaScript
let person = {
    firstName: 'John',
    lastName: 'Doe'
}

Object.defineProperty(person, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});

console.log(person.fullName); //'John Doe'
```

### 定义多个属性

在 ES5 中，可以使用 `Object.defineProperties()` 方法在单个语句中定义多个属性

```javascript
var product = {};

Object.defineProperties(product, {
    name: {
        value: 'Smartphone'
    },
    price: {
        value: 799
    },
    tax: {
        value: 0.1
    },
    netPrice: {
        get: function () {
            return this.price * (1 + this.tax);
        }
    }
});

console.log('The net price of a ' + product.name + ' is ' + product.netPrice.toFixed(2) + ' USD');
```

### 获取对象的描述属性

`Object.getOwnPropertyDescriptor()`

```javascript
let person = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

console.log(descriptor); // { value: 'John', writable: true, enumerable: true, configurable: true }
```



## for...in 循环

使用 for...in 循环来遍历对象的可枚举属性

属性可枚举前提：属性的内部 `enumerable` 标志被设置为 `true` 

语法及例子：

```javascript
for(const propertyName in object) {
    // ...
}

var person = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '299-24-2351'
};

for(var prop in person) {
    console.log(prop + ':' + person[prop]);
}

/*
firstName:John
lastName:Doe
ssn:299-24-2351
*/
```

`for...in` 语句会沿着原型链向上查找并枚举继承的属性

如果只想枚举对象自身的属性，可以使用 `hasOwnProperty()` 方法

## 对象的可枚举属性

ES6 提供了一个方法 `propertyIsEnumerable()` ，用于确定某个属性是否可枚举。如果属性可枚举，则返回 `true` ；否则返回 `false` 

使用方法：`person.propertyIsEnumerable('firstName')`

## 对象的自有属性

直接定义在对象上的属性是自有属性，而对象从其原型继承的属性则是继承属性

`hasOwnProperty()` 用于确定某个属性是否为自身的属性 

使用方法：`employee.hasOwnProperty('job')`

## 工厂函数

当一个函数创建并返回一个新对象时，它被称为工厂函数

```JavaScript
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    getFullName() {
      return firstName + ' ' + lastName;
    },
  };
}

let person1 = createPerson('John', 'Doe');
let person2 = createPerson('Jane', 'Doe');
```

## 对象解构

```JavaScript
// 语法
let { property1: variable1, property2: variable2 } = object;
// : 前面是对象的属性，无论是定义对象属性还是对象解构，属性名始终位于左侧

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let { firstName: fname, lastName: lname } = person;

// firstName 和 lastName 属性分别被赋值给 fName 和 lName 变量

// 如果变量和对象属性同名
let { firstName, lastName } = person;

// 变量声明和赋值分开的时候，必须用()包起来
({firstName, lastName} = person);

// 解构不存在的属性给变量时，变量会被设置为 undefined
let { firstName, lastName, middleName } = person;
console.log(middleName); // undefined

// 设置默认值
let person = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28

// 解构一个空对象
let {firstName, lastName} = null // 报错TypeError: Cannot destructure property 'firstName' of 'null' as it is null.
// 避免这种情况使用 || 回退为空对象
let { firstName, lastName } = getPerson() || {};

// 嵌套对象解构 & 将一个属性赋值给多个变量
let employee = {
    id: 1001,
    name: {
        firstName: 'John',
        lastName: 'Doe'
    }
};
let {
    name: {
        firstName,
        lastName
    },
    name
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }

// 解构函数参数
let display = ({firstName, lastName}) => console.log(`${firstName} ${lastName}`);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};

display(person);
```

## 可选链式操作符

访问对象中的嵌套属性时，无需额外在每一步进行判空，可以直接使用 `?.` ，如果链中的任何部分为空，可选链操作符（ `?.` ）就会立即停止，并返回 `undefined` 作为结果

```javascript
objectName ?. propertyName
objectName ?. [expression]
```

函数调用

```javascript
functionName ?. (args)
```

## ES6 中的对象属性定义语法扩展

### 简洁的属性初始化写法

```JavaScript
// 定义属性的时候如果只有一个名称，会从周围作用域寻找同名变量来赋值
// 案例 1
function createMachine(name, status) {
    return {
        name,
        status
    };
}
// 案例 2
let name = 'Computer',
    status = 'On';

let machine = {
   name,
   status
};
```

### 计算属性名

使用表达式动态定义属性名

将一个表达式放在方括号 `[]` 中，JavaScript 会先计算这个表达式的值，然后将计算结果作为属性名

```JavaScript
// 使用变量作为属性名
let name = 'machine name';
let machine = {
    [name]: 'server',
    'machine hours': 10000
};

console.log(machine[name]); // server

// 表达式
let prefix = 'machine';
let machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};

console.log(machine['machine name']); // server
```

### 简洁的方法定义写法

```JavaScript
// 完整的写法
let server = {
	name: "Server",
	restart: function () {
		console.log("The" + this.name + " is restarting...");
	}
};

// ES6 后可以省略:和 function 关键字
let server = {
    name: 'Server',
    restart() {
        console.log("The" + this.name + " is restarting...");
    }
};

// 属性名有空格，使用引号
let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};
// 调用时使用[]
server['starting up']();
```

# Section 7. Classes

## Class

ES6 之前通过构造函数+原型的模式来模拟类

ES6 引入新的语法来声明类

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
```

类与自定义类型（构建函数+原型模式）的区别

- 类声明不像函数声明那样会被提升
- 类中的所有代码都会自动在严格模式下执行，并且无法更改此行为
- 类方法是非枚举的。如果使用构造函数/原型模式，则必须使用 `Object.defineProperty()` 方法将属性设置为不可枚举
- 不使用 `new` 运算符调用类的构造函数将会导致错误

## Getters and Setters

获取器和设置器

 `get` 关键字将对象属性绑定到一个方法，当查找该属性时将调用此方法

 `set` 关键字将对象属性绑定到一个方法，当对该属性进行赋值时将调用该方法

```javascript
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}
```

## 类表达式

定义一个匿名类，然后赋值给一个变量，通过这个变量可以创建类的实例

```JavaScript
let Person = class {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
```

可以将类作为参数传递给函数、从函数中返回类、将类赋值给变量

```JavaScript
function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() { 
      console.log('Hi'); 
    }
});

greeting.sayHi(); // 'Hi'
```

单例模式：一个类只能被初始化一次，即立即调用创建对象

```JavaScript
new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('Awesome App')
```

## 计算属性

