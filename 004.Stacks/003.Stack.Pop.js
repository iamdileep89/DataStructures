/* Linked List implementation of Stacks */
/* Pop from Stack function */


/*
PSEUDOCODE

If there are no nodes, return null
Create temp to store first of stack
If there is only 1 node, set first and last to be null
If there is more then 1 node,
  set the first as next of first
Decrement size
Return removed node
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
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last == null
        }
        this.first = this.first.next
        this.size--;
        return temp.val;
    }
}

var stack = new Stack()
stack.push(100)
stack.push(101)
stack.push(102)
stack.push(103)
stack.push(104)
stack.pop()
stack.pop()
stack.pop()