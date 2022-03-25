/*
To push the element to the end of the list
*/

/* PSEUDOCODE

This Method should accept value
Create new node using the value passed to this function
If there is no head property, set the head and tail to be newly created node
Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
Increment the length by one
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
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("How")
list.push("are")
list.push("you")