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
    printStk() {
        return this.items
    }
}

function isDigit(idx, str) {
    const char = str.charAt(idx);
    return char >= '0' && char <= '9';
}
function Pedmas(str) {
    let stack = new Stack();
    let ans = 0;
    console.log(str.length);

    if (str.length === 0) {
        return ans;
    }
    let currentNumber = 0;
    let operation = '+';
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (isDigit(i, str)) {
            currentNumber = (currentNumber * 10) + (currentChar - '0');
        }
        if (!isDigit(i, str) || (i === (str.length - 1))) {
            if (operation === '-') stack.push(-currentNumber);
            else if (operation === '+') stack.push(currentNumber);
            else if (operation === '*') {
                stack.push(stack.pop() * currentNumber)
            }
            else if (operation === '/') {
                stack.push(stack.pop() / currentNumber)
            }
            operation = currentChar;
            currentNumber = 0;
        }
    }
    console.log(stack.printStk());
    while (!stack.isEmpty()) {
        ans += stack.pop();
    }
    console.log(ans);
    return ans;
}
export default Pedmas;


