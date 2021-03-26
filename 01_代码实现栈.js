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
      this.items.pop()
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
  console.log(stack.pop())
  console.log(stack.size())
  console.log(stack.peek())
