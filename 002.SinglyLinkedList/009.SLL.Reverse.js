/*
Reverse a singly LL in place
*/

/*
PSEUDOCODE

Swap the head and tail
Create a variable called next
Create a variable called prev
Create a variable called node and initialize it to the head property
Loop through the list
Set next to be the next property on whatever node it is
Set next property on node to be whatever prev is
Set prev variable to be value of node variable
Set node variable to be value of next variable
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
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index == 0) return this.shift();
        if(index == this.length-1) return this.pop();
        var prevNode = this.get(index-1); // get prevNode from the given index
        var removed = prevNode.next; // store prevNode's next in a variable(removed item)
        prevNode.next = removed.next; // set prevNode'next to the removed's next
        this.length--
        return removed;
    }
    print(){
        var arr=[]
        var current = this.head
        while(current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse(){
        var node = this.head
        this.head = this.tail
        this.tail = node
        
        var next
        var prev = null

        for(var i =0; i<this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("How")
list.push("are")
list.push("you")
list.print()
list.reverse()
list.print()




