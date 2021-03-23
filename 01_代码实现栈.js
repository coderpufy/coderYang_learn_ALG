function Stack() {
    var item = [];
    // 入栈
    this.push = function(i) {
        item.push(i)
    }
    // 出栈
    this.pop = function() {
        console.log(this.peek())
        item.pop()
    }
    // 返回即将出栈的数据
    this.peek = function() {
        return item[item.length - 1]
    }
    // 返回栈的长度
    this.size = function() {
        return item.length
    }
}

const stack = new Stack()
stack.push(6)
stack.push(5)
stack.pop()
stack.push(4)
stack.pop()
stack.push(3)
stack.pop()
stack.pop()
stack.push(2)
stack.push(1)
stack.pop()
stack.pop()

