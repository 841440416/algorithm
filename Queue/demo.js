const Queue = require('./queue');

let queue = new Queue();
queue.enqueue('Jack');
queue.enqueue('Rose');
queue.enqueue('Cindy');
queue.print();
queue.dequequ();
queue.dequequ();
queue.print();
console.log(queue.isEmpty())