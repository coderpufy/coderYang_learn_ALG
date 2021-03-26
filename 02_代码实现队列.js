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
    const endName = queue.dequeue()
    return personList.indexOf(endName)
    
  }
  const arr = ['夏明', '夏红', '瞎子', 'pufy', 'qbl', 'lxy', 'hl']
  console.log(game(arr, 5))
