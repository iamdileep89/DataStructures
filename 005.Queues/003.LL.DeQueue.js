/* Linked List implementation of Queues */
/* EnQueue -- Remove value from Queue */


/*
PSEUDOCODE

If there are no nodes, return null
Create temp to store first of queue
If there is only 1 node, set first and last to be null
If there is more then 1 node,
  set the first as next of first
Decrement size
Return removed node
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
    dequeue(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--
        return temp.value;
    }
}

var queue = new Queue();

queue.enqueue('First')
queue.enqueue('Second')
queue.enqueue('Third')

queue.dequeue()
queue.dequeue()
queue.dequeue()