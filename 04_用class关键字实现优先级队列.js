/*
* 首先，需要考虑的是，能实现复杂的优先级队列，那么肯定不会每个队列只是插入一个简单的值
* 这就可以想到每次插入的队列都是一个对象，而这个对象记录着本次插入队列的值的信息
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
const queue = new PriorityQueue()
queue.enqueue(1, 10)
queue.enqueue(2, 5)
queue.enqueue(3, 6)

