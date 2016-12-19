export default class Stack {
  constructor() {
    this._stack = [];
  }

  push(item) {
    this._stack.push(item);
  }

  pop() {
    return this._stack.pop();
  }

  peek() {
    return this._stack[this._stack.length - 1];
  }
}
