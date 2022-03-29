/* Linked List implementation of Queues */
/* EnQueue -- Push value to Queue */


/*
PSEUDOCODE

Funtion should accept a value
Create new node with that value
If there are no nodes, set the first and last as new Node
Else 
  Set the next of current last node to be the new Node
  set the last to newly created node

Increment queue size
Return length
*/

class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first=null;
        this.last=null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
}

var queue = new Queue();

queue.enqueue('First')
queue.enqueue('Second')
queue.enqueue('Third')
