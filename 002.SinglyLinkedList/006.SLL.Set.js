/*
Set/Update a new node/value at a given postion in LL
*/

/* PSEUDOCODE

Method should accept value and index
Use get method to find the specific node at given index
if node is not found, return false
if node is found, set value of that node to be the value passed the method and return true
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
    get(index){
        if(index<0 || index>=this.length) return null;
        var counter = 0
        var current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current;
    }
    set(index, val){
       var foundNode = this.get(index)
       if(foundNode){
           foundNode.val = val
           return true
       }
       return false;
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("How")
list.push("are")
list.push("you")
list.set(2, "Guru")