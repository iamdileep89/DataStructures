/* Replace a node at the given index of DLL */

/* 
PSEUDOCODE

Get the value at given index using GET method
If it returns valid Node, set that node as new Node given, return true
Else return false
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
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        /* Naive Solution looping entire list
        if(index <0 || index >= this.length) return null
        var count = 0;
        var current = this.head
        while(count != index){
            current = current.next
            count++
        }
        return current */

        // Optimised Solution
        if(index <0 || index >= this.length) return null
        if(index <= this.length/2){
            console.log("WORKING FROM START!")
            var count = 0;
            var current = this.head
            while(count != index){
                current = current.next
                count++
            }
            return current
        } else {
            console.log("WORKING FROM END!")
            var count = this.length-1;
            var current = this.tail
            while(count != index){
                current = current.prev
                count--
            }
            return current
        }
        
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }else{
            return false;
        }
    }
}

var list = new DoublyLinkedList()
list.push(100)
list.push(101)
list.push(102)
list.push(103)
list.push(104)
list.push(105)
list.push(106)

list.set(3, 107)