/*
Add a node to the beginning of the LL
*/

/*
This Method should accept a value
Create a new node using the passed value
If there is no head, set the head and tail to be newly created node
If the head exists already, set the newly created node's next to the current head on the list
Set the head property on the list to be the newly created node
Increment length by 1
Return the LL
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
    unshift(val){
        var newNode = new Node(val) // create a new node
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("How")
list.push("are")
list.push("you")
list.unshift("I'am")
list.unshift("Good")