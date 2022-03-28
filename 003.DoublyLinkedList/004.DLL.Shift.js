/* Remove a node at the beginning of DLL */

/* 
PSEUDOCODE

If lenght is 0, return undefined
Store the current head in a variable
If length is 1, set head and tail to be null, since the DLL is empty if we remove that 1 item
If length >1, update head to be next of old head
set new head's prev to null
set old head's next to null
decrement length
return old head

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
    pop(){
        if(!this.head) return undefined
        var poppedNode = this.tail;
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev // set tail as the prev of current tail
            this.tail.next = null // set new tail's next as null
            poppedNode.prev = null // remove connection of removed node with DLL
        }
        this.length--
        return poppedNode
    }

    shift(){
        if(this.length === 0) return undefined
        var oldHead = this.head;
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next // set head as the next of current head
            this.head.prev = null // set new head's prev as null
            oldHead.next = null // remove connection of removed node with DLL
        }
        this.length--
        return oldHead
    }
}

var list = new DoublyLinkedList()
list.push(100)
list.push(101)
list.push(102)
list.push(103)
list.shift()