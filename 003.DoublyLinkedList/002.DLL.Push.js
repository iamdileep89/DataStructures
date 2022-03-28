/* Add a new node at the end of DLL */

/* 
PSEUDOCODE

Create a new node with the given value
If 
  the length is 0, set head and tail to be new Node
Else
  set next of tail as new Node
  set prev of new Node as tail
  set tail as new Node

Increment length
Return the removed value


*/




class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this;
    }
}

var list = new DoublyLinkedList()
list.push(100)
list.push(101)
list.push(102)


