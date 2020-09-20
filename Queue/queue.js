/**
 * @desc 创建队列类
 */
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(ele) {
    this.items.push(ele);
  }
  dequequ() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(JSON.stringify(this.items));
  }
}

module.exports = Queue;