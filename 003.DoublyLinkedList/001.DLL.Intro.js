/*
Doubly Linked List is almost similar to the SLL but every node has another/extra pointer, pointing to the previous node
DLL's use more memory than SLL
Better then SLL for finding nodes etc.,
*/


/*
TIME COMPLEXITY

Insertion -- O(1)
Removal -- O(1)
Searching -- O(N/2) ==== O(N)
Access -- O(N)
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
