const Queue = require('../src/Queue');

describe('Queue operations', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    // Constructor tests
    test('constructor creates empty queue', () => {
        expect(queue.length()).toBe(0);
        expect(queue.isEmpty()).toBeTruthy();
    });

    // Enqueue tests
    test('enqueue adds item to queue', () => {
        queue.enqueue(5);
        expect(queue.length()).toBe(1);
        expect(queue.peek()).toBe(5);
    });

    test('enqueue multiple items', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.length()).toBe(3);
        expect(queue.peek()).toBe(1);
    });

    // Dequeue tests
    test('dequeue removes and returns first item', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        const item = queue.dequeue();
        expect(item).toBe(1);
        expect(queue.length()).toBe(1);
    });

    test('dequeue throws error on empty queue', () => {
        expect(() => queue.dequeue()).toThrow('Queue is empty');
    });

    // Peek tests
    test('peek returns first item without removing it', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.peek()).toBe(1);
        expect(queue.length()).toBe(2);
    });

    test('peek throws error on empty queue', () => {
        expect(() => queue.peek()).toThrow('Queue is empty');
    });

    // Length tests
    test('length returns correct queue size', () => {
        expect(queue.length()).toBe(0);
        queue.enqueue(1);
        expect(queue.length()).toBe(1);
        queue.enqueue(2);
        expect(queue.length()).toBe(2);
        queue.dequeue();
        expect(queue.length()).toBe(1);
    });

    // isEmpty tests
    test('isEmpty returns true for empty queue', () => {
        expect(queue.isEmpty()).toBeTruthy();
    });

    test('isEmpty returns false for non-empty queue', () => {
        queue.enqueue(1);
        expect(queue.isEmpty()).toBeFalsy();
    });

    // removeAll tests
    test('removeAll clears the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.removeAll();
        expect(queue.isEmpty()).toBeTruthy();
        expect(queue.length()).toBe(0);
    });
});