const Queue = require('./queue');

let queue = new Queue();
queue.enqueue('Jack');
queue.enqueue('Rose');
queue.enqueue('Cindy');
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue.isEmpty())