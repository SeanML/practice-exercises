// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  insertFirst(val) {
    this.head = new Node(val, this.head);
    this.count += 1;
  }

  size() {
    return this.count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
  
    let curr = this.head;
    while (curr) {
      if (!curr.next) {
        return curr;
      }

      curr = curr.next;
    }
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    this.count -= 1;
  }

  removeLast() {  
    if (!this.head) {
       return;
    }

    if (!this.head.next) {
      this.head = null;
      this.count -= 1;
      return;
    }
    
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    this.count -= 1;
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    let node = new Node(data);  
    last ? last.next = node : this.head = node;
    this.count += 1;
  }

  getAt(idx) {
    let counter = 0;
    let curr = this.head;
    while (curr) {
      if (counter === idx) {
        return curr;
      }

      curr = curr.next;
      counter += 1;
    }

    return null;
  }

  removeAt(idx) {
    if (!this.head) {
      return;
    }

    if (idx === 0) {
      this.head = this.head.next;
      return;
    }
  
    const parent = this.getAt(idx - 1);
    if (!parent || !parent.next) {
      return;
    }

    let child = parent.next;
    parent.next = child.next;
    this.count -= 1;
  }

  insertAt(data, idx) {
    if (!this.head || idx <= 0) {
      this.head = new Node(data, this.head);
      this.count += 1;
      return;
    }

    const parent = this.getAt(idx - 1) || this.getLast();
    const child = parent.next;
    parent.next = new Node(data, child);
    this.count += 1;
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn.call(this, node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
