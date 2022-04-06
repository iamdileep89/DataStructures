/*. OBJECTIVES

Define what binay heap is

*/

/*

Binary Heap is similar to Binary Search Tree, but with some different rules!
In a MaxBinaryHeap, parent nodes are always larger than child nodes
In a MinBinaryHeap, parent nodes are always smaller than child nodes


         41
    39          33
 18    27    12     

Binary Heap array = [41, 39, 33, 18, 27, 12]

*/

/*

Each parent has at most two child nodes
The value of each parent node is always greater than its child nodes
In a MaxBinaryHeap, parent nodes are always larger than child nodes, but there are no guarantees between sibling nodes
Binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

*/

/* USAGE

Binary heaps are used to implement Priority Queues, which are very most commonly used Data Structures
Binary heaps are also used quite a bit, with Graph traversal algorithms

*/


/* STORING HEAPS

There is an easy way of storing a Binary Heap i.e., List/Array.

         41
    39          33
 18    27    12     

Heap array = [41, 39, 33, 18, 27, 12]
    indexs --  0   1   2   3   4   5

For any parent node at index of an array n,
  left child is stored at 2n+1
  right child is stored at 2n+2

For any child node at index n, 
  its parent is at index Math.floor((n-1)/2)

*/


/*
TIME COMPLEXITY

Insertion, Removal - O(log N)
Searching - O(N)
*/