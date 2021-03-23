function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
}

function PriorityQueue() {
    var items = [];
    // 追加方法
    this.enqueue = function(element, priority) {
        // 1.根据传入的元素, 创建新的QueueElement实例
        const queueElement = new QueueElement(element, priority)
        if(this.isEmpty()) {
            items.push(queueElement)
        } else {
            var added = false;
            for (let i = 0; i< items.length; i ++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement)
                    added = true;
                    break
                }
            }
            if (!added) {
                items.push(queueElement)
            }
        }

    }
    // 删除方法
    this.dequeue = function() {
        items.shift()
    }
    // 查看最前面的
    this.front = function() {
        return items[0]
    }
    this.size = function() {
        return items.length
    }
    this.show = function() {
        return items
    }
    // 是否为空
    this.isEmpty = function() {
        return items.length === 0
    }
}

const queue = new PriorityQueue();
queue.enqueue(1, 10)
queue.enqueue(2, 22)
queue.enqueue(3, 5)
queue.enqueue(4, 1)
queue.enqueue(5, 10)
queue.dequeue()
// console.log(queue.front())

console.log(queue.show().forEach(item => {
    console.log(item.element)
}))
