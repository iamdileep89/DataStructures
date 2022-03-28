/*
Doubly Linked List is almost similar to the SLL but every node has another pointer, to the previous node
DLL's use more memory then SLL
*/


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

var first = new Node(12)
first.next = new Node(13)
first.next.previous = first

console.log(first);
