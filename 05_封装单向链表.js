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


const  list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.insert(1, 10)
// console.log(list.removeAt(1))
console.log(list.indexOf(0))
console.log(list.toString())
