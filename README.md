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
| concat      | 连接2个或多个数组，并返回结果（新数组）                      |
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

### 2、实现栈结构

#### 2.1、常见的栈操作

| 方法          | 介绍                                                         |
| ------------- | ------------------------------------------------------------ |
| push(element) | 添加一个新元素到栈顶位置                                     |
| pop()         | 移除栈顶的元素，同时返回被移除的元素                         |
| peek()        | 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回他） |
| isEmpty()     | 如果栈里没有任何元素就返回 `true`， 否则返回 `false`         |
| clear()       | 移除栈里的所有元素                                           |
| size()        | 返回栈里的元素个数。这个方法和数组的 `length` 类似           |

#### 2.2、代码实现栈操作

````js
class Stack {
  // 构造函数，定义变量items
  constructor() {
    this.items = []
  }
 	// 压栈操作
  push(item) {
    this.items.push(item)
  }
  // 出栈操作
  pop() {
    return this.items.pop()
  }
  // 返回最上层栈
  peek() {
   	return this.items[0]
  }
  // 判断栈是不是空的
  isEmpty() {
    return this.items.length === 0
  }
  // 清空栈
  clear() {
    this.items = []
  }
  // 栈长度
  size() {
    return this.items.length
  }
}

const stack = new Stack()
stack.push(6)
console.log(stack.peek())
console.log(stack.size())
````

#### 2.3、栈结构应用

十进制转二进制

````js
function dec2bin(decNumber) {
  var stack = new Stack()
  var remainder
  while (decNumber > 0) {
    remainder = decNumber % 2
    decNumber = Math.floor(decNumber / 2)
    stack.push(remainder)
  }
  // 去除数据
  let res = ''
  while(!stack.isEmpty()) {
    res += stack.pop()
  }
  return res
}
````

## 队列结构

### 1、认识队列结构

* 队列（Queue），是一种运算受限的线性表，先进先出（FIFO）
  * 队列是一种受限的线性结构
  * 受限之处在于他只允许在表的前端（front）进行删除操作， 而在标的后端进行插入操作
* 生活中的例子：
  * 排队买票
  * 排队上厕所
* 程序中的例子：
  * 打印机
  * 线程队列

### 2、队列的实现

#### 2.1、常见的队列操作

| 方法名           | 说明                                                         |
| ---------------- | ------------------------------------------------------------ |
| enqueue(element) | 向队列尾部添加一个（或多个）新的项                           |
| dequeue()        | 移除队列的第一（排在队列的最前面）项，并返回被移除元素       |
| front()          | 返回队列中第一个元素——先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack 类的 peek 方法类似） |
| isEmpty()        | 如果队列中不包含任何元素，返回true， 否则返回 false          |
| size()           | 返回队列包含的元素个数，与数组的 length 属性类似             |

#### 2.2、代码实现简单的队列操作

````js
class Queue {
  constructor() {
    this.items = []
  }
  // 入队列
  enqueue(element) {
    this.items.push(element)
  }
  // 出队列
  dequeue() {
    return this.items.shift()
  }
  // 将要出队列的数据
  front() {
    return this.items[0]
  }
  // 队列是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 队列长度
  size() {
    return this.items.length
  }
}
const queue = new Queue()
queue.enqueue(1)
console.log(queue.front())
````

#### 2.3、代码实现复杂的优先级队列

````js
/*
*	首先，需要考虑的是，能实现复杂的优先级队列，那么肯定不会每个队列只是插入一个简单的值
* 这就可以想到每次插入的队列都是一个对象，而这个对象记录着本次插入队列的值得信息
* @params: element 表示入队列的值
* @params: priority 表示入队列的值得优先级
* { element: ***, priority: 123321}
*/

// 首先定义每次存储变量的构造函数
class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}
// 定义队列构造函数
class PriorityQueue {
  constructor() {
    // 定义数组存储信息
    this.items = []
  }
  // 入队列
  enqueue(element, priority) {
    // 首先使用构造函数创建存储对象， 这样 priorityElement 里面就存储了本次需要存储的值
    const priorityElement = new QueueElement(element, priority)
    // 判断队列是否为空，是则直接插入
    if (this.isEmpty()) {
      this.items.push(priorityElement)
    } else {
      // 只有队列不为空的情况下才进行对比优先级的操作插入
      // 记录是否插入进去了
      let added = false
      // 循环查找匹配位置
      for (let i = 0; i < this.items.length; i ++) {
        // 当队列中的priority 大于 本次插入的priority ， 将本次插入的放在其后面
        if (this.items[i].priority > priorityElement.priority) {
          this.items.splice(i, 0, priorityElement)
          added = true
          break
        }
      }
      if (!added) {
        this.items.push(priorityElement)
      }
    }
  }
  // 出队列
  dequeue() {
    return this.items.shift()
  }
  // 将要出队列的数据
  front() {
    return this.items[0]
  }
  // 队列是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 队列长度
  size() {
    return this.items.length
  }  
}
````

#### 2.4、队列结构应用

给定一个数，一堆人围一圈，从头开始数，数到这个数的人淘汰，然后继续，获取到最后站在C位的人

````js
function game(personList = [], num) {
  // 创建一个队列
  const queue = new Queue()
  // 将人插入队列
  for (let i = 0; i < personList.length; i ++) {
    queue.enqueue(personList[i])
  }
  // 循环找到那些淘汰的人，并将其淘汰
  while(queue.size() > 1) {
    for (let i = 0; i < num; i ++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  alert(queue.size())
  const endName = queue.dequeue()
  console.log(endName)
  return personList.indexOf(endName)
}
const arr = ['夏明', '夏红', '夏雨', 'pufy', 'qbl', 'lxy', 'hl']
console.log(game(arr, 5))
console.log()
````

## 链表结构

### 1、认识链表结构

* 数组的缺点：
  * 数组的创建通常需要申请一段连续的内存空间（一整块内存），并且大小是固定的（大多数编程语言数组都是固定的），所以当当前数组不能满足容量需求时，需要扩容（一般情况下是申请一个更大的数组，比如2倍 然后将原数组中的元素复制过去）
  * 而且在数组开头或中间位置插入数据的成本很高，需要进行大量元素的位移（尽管我们已经学过数组的API可以帮助我们做这些事，但背后的原理依然这样）
* 链表：
  * 要存储多个元素，另外一个选择就是使用链表
  * 但不同于数组，链表中的元素在内存中不必是连续空间
  * 链表的每个元素由一个存储元素本身的节点和一个纸箱下一个元素的引用（有些语言成为指针或链接）组成
  * 对比数组，链表的优点：
    * 内存空间不是必须连续，可以充分利用计算机的内存实现灵活的内存动态管理
    * 链表不必再创建时就确定大小，并且大小可以无限的延伸下去
    * 链表在插入和删除数据时，时间复杂度可以达到O(1) 相对数组效率高很多
  * 对比数组，链表的缺点：
    * 链表范文任何一个位置的元素时，都需要从头开始访问（无法跳过第一个元素访问任何一个元素）
    * 无法通过下表直接访问元素，需要从头一个个访问，知道找到对应的问题

### 2、实现链表结构

#### 2.1、常见链表操作

| 方法名                    | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| append(element)           | 向链表尾部添加一个新的项                                     |
| insert(position, element) | 向链表特定位置添加一个新的项                                 |
| remove(element)           | 从链表中移除一项                                             |
| indexOf(element)          | 返回元素在链表中的索引，如果没有返回 -1                      |
| removeAt(element)         | 从链表中特定位置移除一项                                     |
| isEmpty()                 | 如果链表中不包含任何元素，则返回 true，否则返回 false        |
| size()                    | 返回链表包含的元素个数，与数组的 length 类似                 |
| toString()                | 由于链表项使用了Node 类，就需要重写继承自 Javascript对象默认的 toString 方法，让其只输出元素的值 |

#### 2.2、代码实现链表操作

````js
// 定义创建节点构造方法
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null
    }
    // 末尾新增
    append(element) {
        // 根据新元素创建节点
        const newNode = new Node(element)
        // 判断原来链表是否为空
        if (this.head === null) { // 链表为空
            this.head = newNode
        } else {
            // 定义变量保存当前找到的节点
            let current = this.head
            while (current.next) {
                current = current.next
            }
            // 找到最后一项,将其next赋值为node
            current.next = newNode
        }
        // 链表长度 +1
        this.length ++
    }
    toString() {
        // 定义两个变量
        let current = this.head
        let listString = ''
        // 循环获取链表中所有元素
        while(current) {
            listString += ',' + current.element
            current = current.next
        }
        // 返回结果
        return listString.slice(1)
    }
    // 插入
    insert(position, element) {
        // 越界问题
        if (position < 0 || position > this.length) return false
        // 找到正确位置并插入
        const newNode = new Node(element)
        let current = this.head,
            previous = null,
            index = 0
        // 判断是否从第一个位置插入
        if (position === 0) {
            newNode.next = current
            this.head = newNode
        } else {
            while (index ++ < position) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
        this.length ++
        return true
    }
    // 指定位置移除
    removeAt(position) {
        // 找到位置
        // 检测越界问题:越界移除失败,返回null
        if (position< 0 || position >= this.length) return null
        // 定义变量,保存信息
        let current = this.head,
            previous = null,
            index = 0
        // 判断是否是移除第一项
        if (position === 0) {
            this.head = current.next
        } else {
            while(index ++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.length --
        return current.element
    }
    // 查找元素位置
    indexOf(element) {
        // 定义变量保存信息
        let current = this.head,
            index = 0
        // 找到元素位置
        while (current) {
            if (current.element === element) {
                return index
            }
            index ++
            current = current.next
        }
        // 循环结束表示为找到
        return -1
    }
    // 按名称删除
    remove(element) {
        let index = this.indexOf(element)
        this.removeAt(index)
    }
    // 是否为空
    isEmpty() {
        return this.length === 0
    }
    // 长度
    size() {
        return this.length
    }
    
}
````

## 

























