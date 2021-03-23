## 数组结构

### 1、创建和初始化数组

````js
var arr = new Array();
var arr = new Array(7);
var arr = new Array('a', 'b', 'c', 'd', 'e', 'f');
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
````

* 前三种方法是使用了 `new` 关键字创建数组，可以为其指定长度，也可以直接往数组里放入数据
* 最后一种方法非常常用，简单方便

### 2、数组长度和遍历数组

````js
// 获取数组长度 length 属性
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.length

// 遍历数组方法 for循环
for（let i = 0; i < arr.length; i ++） {
  console.log(arr[i])
}
// 遍历数组方法 forEach
arr.forEach((item, index) => {
  console.log(index + ': ' + item)
})
````

* 练习：
  * 求菲波那切数列的前20个数字, 并且放在数组中.
  * 菲波那切数列数列第一个数字是1, 第二个数字也是1, 第三项是前两项的和

````js
var arr = []
arr[0] = arr[1] = 1
for (var i = 2; i < 20; i ++) {
  arr[i] = arr[i - 1] + arr[i - 2]
}
console.log(arr)
````

### 3、常见的数组操作

#### 3.1、 添加元素(push、unshift)

````js
// 初始化一个数组
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
````

* 添加一个元素到数组的最后位置:

````js
// 方式一：
numbers[numbers.length] = 10
// 方式二：push
numbers.push(11)
numbers.push(12, 13)
````

* 在数组首位插入一个元素:

````js
// 方式一：
for (i = numbers.length; i > 0; i --) {
  numbers[i] = numbers[i-1];
}
numbers[0] = -1
// 方式二：
numbers.unshift(-3, -2)
````

#### 3.2、 删除元素（pop、shift）

````js
// 初始化一个数组
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
````

* 删除最末元素：

````js
numbers.pop()
````

* 删除首位元素

````js
numbers.shift()
````

#### 3.3、 数组中间操作方法（splice）

````js
// 初始化一个数组
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
````

* 通过splice删除数据

````js
// 删除指定位置的几个元素
numbers.splice(5, 3)
console.log(numbers) // -4,-3,-2,-1,0,4,5,6,7,8,9,10,11,12,13
````

* 代码解析:
  * 上面的代码会删除索引为5, 6, 7位置的元素.
  * 第一个参数表示索引起始的位置为5(其实是第6个元素, 因为索引从0开始的), 删除3个元素.

* 通过splice 插入数据

````js
// 插入指定位置元素
numbers.splice(5, 0, 3, 2, 1)
console.log(numbers) // -4,-3,-2,-1,0,3,2,1,4,5,6,7,8,9,10,11,12,13
````

* 代码解析:
  * 上面的代码会从索引为5的位置开始插入数据. 其他数据依次向后位移.
  * 第一个参数依然是索引值为5(第六个位置)
  * 第二个参数为0时表示不是删除数据, 而是插入数据.
  * 后面紧跟的是在这个位置要插入的数据, 可以是其他类型, 比如"a", "b", "c".

* 通过splice修改数据

````js
// 修改指定位置的元素
numbers.splice(5, 3, "a", "b", "c")
alert(numbers) // -4,-3,-2,-1,0,a,b,c,4,5,6,7,8,9,10,11,12,13
````

* 代码解析:
  * 上面的代码会从索引5的位置开始修改数据, 修改多少个呢? 第二个参数来决定的.
  * 第一个参数依然是索引的位置为5(第六个位置)
  * 第二个参数是要将数组中多少个元素给替换掉, 我们这里是3个(也可以使用3个元素来替换2个, 可以自己尝试一下)
  * 后面跟着的就是要替换的元素.



### 4、数组的其他操作

#### 4.1、 常见方法

| 方法名称    | 方法描述                                                     |
| ----------- | ------------------------------------------------------------ |
| concat      | 连接2个或多个数组，并返回结果                                |
| every       | 对数组中的每一项运行给定函数，如果函数对每一项都返回 `true`，则返回 ` true`， 否则返回 `false` |
| filter      | 对数组中的每一项运行给定函数，返回该数组会返回 `true` 的项组成的数组 |
| forEach     | 对数组的每一项运行给定函数，这个方法没有返回值。「常用来遍历数组」 |
| join        | 将所有的数组元素连接成一个字符串                             |
| indexOf     | 返回第一个与给定参数相等的数组元素的索引，没有找到返回 -1    |
| lastIndexOf | 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值     |
| map         | 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组 |
| reverse     | 点到数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先最后一个元素变成了现在的第一个 |
| slice       | 传入索引值，将数组里对应索引范围内的元素作为新数组返回       |
| some        | 对数组中的每一项运行给定函数，如果任一项返回true，则结果为 true，并且迭代结束 |
| sort        | 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数   |
| toString    | 将数组作为字符串返回                                         |
| valueOf     | 和toString类似，将数组作为字符串返回                         |

#### 4.2、 数组合并（concat）

````js
let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
let arr2 = arr.concat(arr1);
console.log(arr2) // [1, 2, 3, 4, 5, 6]
````

#### 4.3、 迭代方法（every、some、forEach、filter、map）

##### 4.3.1、every

* 判断一个数组中的每一项是否都包含字符 `'a'`

````js
var arr = ['ab', 'adf', 'egdga']
let flag = arr.every(item => {
  return item.indexOf('a') != -1
})
console.log(flag)
````

* 当且仅当数组 arr 中的每一项都包含 ` 'a' `， `'flag'` 才会为true

##### 4.3.2、some

* 判断一个数组中的每一项是否有一项包含字符 `'a'`

````js
var arr = ['fsa', 'fdd', 'effgdq']
let flag = arr.some(item => {
  return item.indexOf('a') != -1
})
````

* 当数组arr中的任意一项包含字母 `'a'`， `'flag'` 就为true
* 当匹配到的一项回调函数返回结果为 true， 那么some函数就会终止去遍历其他项而直接返回 true

注 ： every 和 some 的区别就在于，every 关注每一项，some 只关注符合条件的一项

##### 4.3.3、forEach

* forEach只用作遍历数组，没有返回值

````js
let arr = [1, 2, 3]
arr.forEach((itme, index) => {
  console.log(index + ': ' + item)
})
````

##### 4.3.4、filter

* filter方法是一种过滤函数
* 首先会遍历数组中的每一个元素传入发哦函数中
* 函数的结果返回 true， 那么这个元素会被添加到最新的数组中， 返回 false 则忽略改元素
* 最终会形成一个新的数组， 这个新数组就是filter 方法的返回值

````js
var arr = [1, 2, 3, 4, 5, 6, 7]
let newArr = arr.filter(item => {
  return item > 4
})
console.log(newArr); // [5, 6, 7]
````

##### 4.3.5、map

* map 方法提供一种映射函数
* 首先会遍历数组中的每一个元素传入到函数中
* 元素会经过函数中的指令进行各种变幻，生成新的元素，并将新的元素返回
* 最终会将收集到的新的返回元素形成一个新的数组，就是 map 方法的返回值

````js
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
let newArray = arr.map(item => {
  return item + 1
})
console.log(newArr)// [2, 3, 4, 5, 6, 7, 8, 9]
````

#### 4.4、reduce方法

````js
//reduce方法需要的参数
arr.reduce(callback[, initialValue])
````

* 参数：
  * callback 是一个回调函数，遍历数组的每一项都会执行这个函数，这个回调函数接收四个参数：
    * previousValue （上一次调用回调函数的返回值，或者初始值）
    * currentValue（当前正在处理的数组元素）
    * currentIndex（当前正在处理的数组元素下标）
    * array（调用 `reduce` 方法的数组）
  * initialValue（可选的初始值，作为第一次调用函数式传给  `previousValue` 的参数 ）

![image-20210323134606541](/Users/pufeiyang/Library/Application Support/typora-user-images/image-20210323134606541.png)

## 栈结构

### 1、认识栈结构

* 栈结构：
  * 数组：
    * 数组是一种线性结构，并且可以再数组的任意位置插入和删除数据
    * 但有的时候，为了实现某些功能，必须对这种任意性加以限制
    * 而栈和队列就是比较常见的受限的线性结构，我们先来学习栈结构
  * 栈（stack）是一种运算受限的线性表，后进先出（LIFO）
    * LIFO「last in first out」标识就是后进入的元素，第一个弹出占空间
    * 其限制是仅允许在表的一段进行插入和删除运算。这一端被称之为栈顶，相对另一端称之为栈底
    * 向一个栈插入新元素称为 进栈、入栈、压栈，他是把新元素方法栈顶元素上面，使其成为新元素
    * 从一个栈删除元素又称作出栈或退栈，他是把栈顶元素删除掉，时期相邻的元素称为新的栈顶元素
  * 在程序中使用栈实现的有哪些呢？
    * 函数调用栈：
      * 函数之间相互调用：a调用b， b调用c， c调用d
      * 那么在执行的过程中，会将 a 压入栈，由于a没执行完，所以不会弹出栈
      * 在a 执行的过程中调用了b，会将b压入到栈，这时b在栈顶，a在栈底
      * 如此循环往复，当且仅当 d执行完出栈后c才执行完出栈，随后b执行完出栈，最后a执行完出栈
  * 代码 实现 简单的 栈结构

````js
function Stack(){
    var item = []
    this.push = function (i) {
        item.push(i)
    }
    this.pop = function(){
        item.pop()
    }
    this.isEmpty = function() {
        return item.length == 0
    }
    this.peek = function() {
        return item[item.length-1]
    }
    this.size = function() {
        return item.length
    }
}
const stack = new Stack();
````



* 封装个函数，传入十进制数字得到最后结果为二进制

````js
function dec2bin(decNumber) {
    const stack = new Stack();
    let remainder;
    while (decNumber > 0) {
        remainder = decNumber % 2;
        decNumber = Math.floor(decNumber / 2)
        stack.push(remainder)
    }

    let res = ''
    while (!stack.isEmpty()) {
        res += stack.pop()
    }
    return res
}
````









随笔：

* 当构造函数中的属性或方法在其个别实例上用不到的时候，可将其封装到构造函数的 prototype 上，避免创建实例过多占用内存过剩

````js
// 下面代码中，likeEat
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  
}
````







































