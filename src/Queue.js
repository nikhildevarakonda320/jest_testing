class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    length() {
        return this.items.length;
    }

    removeAll() {
        this.items = [];
    }
}

module.exports = Queue;