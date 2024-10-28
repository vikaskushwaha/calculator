class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (this.items.length === 0) {
            return "underflow";
        }
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0;
    }
}



function Pedmas() {
    let stack = new Stack();
    console.log(stack.isEmpty());
    console.log(stack.pop())

}

export default Pedmas;