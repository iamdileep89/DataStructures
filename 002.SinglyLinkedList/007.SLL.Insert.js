/*
Insert a val at at a given postion/index in LL
*/

/* PSEUDOCODE
If index < 0 || > LL length, return false
If index = length, call push method to insert at end
If index = 0, call unshift method to insert at beginning
else
Use get method to access node at (index-1)
Set next property on that node to be new node
Set next property on the new node to be previous next
Increment length by 1
Return true
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
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index == this.length) return !!this.push(val);
        if(index == 0) return !!this.unshift(val);
        var newNode = new Node(val); // create new node
        var prev = this.get(index-1); // get the prev node of the given index
        var temp = prev.next // store a the index item in temp
        prev.next = newNode // set prev's next to new node
        newNode.next = temp // set newNode's next to temp
        this.length++ // increment length
        return true
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("How")
list.push("are")
list.push("you")
list.insert(2, "Guru")