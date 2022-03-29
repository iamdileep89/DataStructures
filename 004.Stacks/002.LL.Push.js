/* Linked List implementation of Stacks */
/* Push to Stack function */


/*
PSEUDOCODE

Funtion should accept a value
Create new node with that value
If there are no nodes, set the first and last as new Node
Else 
  create a variable to store the current first of stack
  set the first to newly created node
  set next of this first node the stored variable

Increment stack size
*/


class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}


class Stack {
    constructor(){
        this.first=null
        this.last =null
        this.size=0
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        } else {
            var temp = this.first
            this.first = newNode;
            this.first.next = temp
        }
        return ++this.size;
        
    }
}

var stack = new Stack()
stack.push(100)
stack.push(101)
stack.push(102)
stack.push(103)
stack.push(104)