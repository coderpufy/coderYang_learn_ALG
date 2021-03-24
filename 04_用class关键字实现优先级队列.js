class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.items = []
    }
    // 追加方法
    enqueue(element, priority) {
        // 1.根据传入的元素, 创建新的QueueElement实例
        const queueElement = new QueueElement(element, priority)
        if(this.isEmpty()) {
            this.items.push(queueElement)
        } else {
            var added = false;
            for (let i = 0; i< this.items.length; i ++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)
                    added = true;
                    break
                }
            }
            if (!added) {
                this.items.push(queueElement)
            }
        }

    }
    // 删除方法
    dequeue () {
        this.items.shift()
    }
    // 查看最前面的
    front() {
        return this.items[0]
    }
    size() {
        return this.items.length
    }
    show() {
        return this.items
    }
    // 是否为空
    isEmpty() {
        return this.items.length === 0
    }
}

console.log(PriorityQueue.prototype)
const queue = new PriorityQueue();
queue.enqueue(1, 10)
// queue.enqueue(2, 22)
// queue.enqueue(3, 5)
// queue.enqueue(4, 1)
// queue.enqueue(5, 10)
// queue.dequeue()
// console.log(queue.front())

console.log(queue.show().forEach(item => {
    console.log(item.element)
}))
