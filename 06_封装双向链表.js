class Node {
    constructor(element) {
        this.pre = null
        this.element = element
        this.next = null
    }
}

class DoubleList {
    constructor() {
        this.head = null
        this.length = 0
        this.tail = null
    }
    // 添加
    append(element) {
        const newNode = new Node(element)
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.pre = this.tail
            this.tail = newNode
        }
        this.length ++

    }
    // 正向遍历
    forwardString() {
        let current = this.head,
            str = ''
        while (current) {
            str += ', ' + current.element
            current = current.next
        }
        return str.slice(1)
    }
    // 反向遍历
    reverseString() {
        let current = this.tail,
            str = ''
        while (current) {
            str += ', ' + current.element
            current = current.pre
        }
        return str.slice(1)
    }
    // toString方法
    toString() {
        return this.forwardString()
    }
    // 任意位置插入
    insert(position, element) {
        // 判断越界问题
        if (position < 0 || position > this.length) return
        const newNode = new Node(element)
        if (position === 0) {
           if (this.head == null) {
                this.head = newNode
                this.tail = newNode
           } else {
               newNode.next = this.head
               this.head.pre = newNode
               this.head = newNode
           }
        } else if (position === this.length){
            this.tail.next = newNode
            newNode.pre = this.tail
            this.tail = newNode
        } else {
            let index = 0,
                current = this.head,
                prevoius = null
            while (index ++ < position) {
                prevoius = current
                current = current.next
            }
            newNode.next = current
            newNode.pre = prevoius
            current.pre = newNode
            prevoius.next = newNode
        }
        this.length ++

    }
}

const doubleList = new DoubleList()
doubleList.append(1)
doubleList.append(2)
doubleList.append(3)
doubleList.insert(2, 10)
console.log(doubleList.forwardString())
console.log(doubleList.reverseString())
