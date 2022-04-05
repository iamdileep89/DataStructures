/*
Remove max value from the heap is called ExtractMax.

To remove max value from the Max Binary heap, 
  Remove the root since it is the max item
  Replace with the most recently added
  Adjust(sink down)
*/


/* SINK DOWN ?

The procedure for deleting the root from heap and restoring the properties is called down-heap/bubble-down/sink-down
Extracting the max element in max heap or min element from min heap

*/


/* PSEUDOCODE

Swap the first value with the last one
Pop from the values, so that you can return value at end
Have a new root "sink down" to the correct spot

Sink Down
  parent idx starts at 0 ie root
  find the idx of left child - 2*idx+1
  find the idx of right child - 2*idx+2
  if the left/right child is greater than element, swap
  if both left and right are larger, then swap with largest value
  child index now swapped will become the new idx
  keep looping & swapping until no child is larger than the parent
  retun the old root
  

*/





class MaxBinaryHeap {
    constructor(){
        this.values = []
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp()
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break; // For MinBinaryHeap element >= parent
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
           this.values[0] = end;
            this.sinkDown();
        }
        return max;
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
                if(leftChild > element){ // For MinBinaryHeap, leftChild < element
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || // For MinBinaryHeap, rightChild < element
                    (swap !== null && rightChild > leftChild ) // For MinBinaryHeap, rightChild < leftChild
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

var heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);


//          41
//     39          33
//  18    27    12     

// heap.values // [41, 39, 33, 18, 27, 12]
// heap.extractMax() // 41
// step -1 : [12, 39, 33, 18, 27]
// step -2 : [39, 12, 33, 18, 27]
// step -3 : [39, 27, 33, 18, 12]
