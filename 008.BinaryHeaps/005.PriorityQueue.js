
/* PSEUDOCODE

Write a Min Binary Heap = lower number means, high priority
Each node has a val and a property, use property to build the heap
ENQUEUE
  this method accepts a value and its priority, make a new node, 
  and puts it in right spot based on priority
DEQUEUE
  this method removes the root element, returns it and rearranges heap based on priority
  

*/



class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        var newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break; // For MaxBinaryHeap, element.priority <= parent.priority
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
           this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2*idx+1;
            let rightChildIdx = 2*idx+2;
            let leftChild, rightChild;
            let swap = null
            if(leftChildIdx<length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){ // For MaxBinaryHeap, leftChild.priority > element.priority
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || // For MaxBinaryHeap, rightChild.priority < element.priority
                    (swap !== null && rightChild.priority < leftChild.priority ) // For MaxBinaryHeap, rightChild.priority < leftChild.priority
                 ){
                    swap = rightChildIdx
                 }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

var ERQueue = new PriorityQueue();
ERQueue.enqueue("common cold", 5);
ERQueue.enqueue("Fever", 3);
ERQueue.enqueue("body pains", 1);


