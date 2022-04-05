/*
Insert a value in the Max Binary Heap

To add a value to the Max Binary heap, 
  Add value to the end of heap array
  then bubble up to compare and swap
*/


/* PSEUDOCODE

Push the value into the values property on the heap
Bubble up the value up to its correct spot

BubbleUp:
  Create a variable called index which is the length of the values-1 ie., inserted element
  Create a variable called parentindex which is the floor of (index-1)/2
  Keep looping as long as the values element at the parentIdx is < values at the child idx
    Swap the value of the values element at the parentIdx with the value of element property at the child idx
    Set the idx to be the parentIdx and start over again


*/



class MaxBinaryHeap {
    constructor(){
        this.values = [41, 39, 33, 18, 27, 12]
    }
    insert(element){
        this.values.push(element);
        this.bubbleup()
    }
    bubbleup(){
         let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
          // now swap
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }  
    }
}

var heap = new MaxBinaryHeap();
heap.insert(55); //[55, 39, 41, 18, 27, 12, 33]


//          41
//     39          33
//  18    27    12     

// Heap array = [41, 39, 33, 18, 27, 12]

        // idx
// [41, 39, 33, 18, 27, 12, 55]

// idx
// [41, 39, 55, 18, 27, 12, 33]

// [55, 39, 41, 18, 27, 12, 33]


