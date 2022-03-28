/* Remove a node at the end of DLL */

/* 
PSEUDOCODE

If lenght is 0, return undefined
Store the tail in a variable
If length is 1, set head and tail to be null, since the DLL is empty if we remove that 1 item
If length >1, update tail to be prev node
set new tail's next to null
decrement length

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
        var poppedNode = this.tail; //store last item in a variable

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
}

var list = new DoublyLinkedList()
list.push(100)
list.push(101)
list.push(102)
list.push(103)
list.pop()