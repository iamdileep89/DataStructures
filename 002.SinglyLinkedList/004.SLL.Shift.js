/*
Removing new Node from beginning of the LL
*/

/*  PSEUDOCODE
If there are no nodes, return undefined
Store current head in a variable
Set head property to the current head's next
Decrement lenght by 1
Return value of removed node
*/


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;  // the current item
        var newTail = current; // temp value to keep track of the 2nd to last node
        while(current.next){
            newTail = current // assign current value to temp variable
            current = current.next // assign next value as current value
        }
        this.tail = newTail 
        this.tail.next = null
        this.length--
        if(this.length ===0){
            this.head = null
            this.tail = null
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head; // store head in temp
        this.head = currentHead.next; // assign the next of currentHead as main head
        currentHead.next = null; // set temp head as null
        this.length-- // decrease length
        if(this.length ===0){
            this.tail = null
        }
        return currentHead;
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("How")
list.push("are")
list.push("you")
list.shift()
list.shift()