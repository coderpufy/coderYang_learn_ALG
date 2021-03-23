function PriorityQueue() {
    var items = [];
    // 追加方法
    this.enqueue = function(i) {
        items.push(i)
    }
    // 删除方法
    this.dequeue = function() {
        items.unshift()
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
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.show())
