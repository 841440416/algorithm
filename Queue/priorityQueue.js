const Queue = require("./queue");

class QueueElement{
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

/**
 * @desc 优先队列
 * @param {String} element
 * @param {Int} priority
 */
class PriorityQueue extends Queue {
  constructor() {
    super();
  }

  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print();