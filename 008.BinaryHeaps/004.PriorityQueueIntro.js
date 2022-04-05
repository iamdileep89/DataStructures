/** BUILDING A PRIORITY QUEUE **/

/*

PRIORITY QUEUE is a data structure where each element has a priority.
Element with higher priorities are served before elements with lower priorities

*/

/* NAIVE VERSION

Use a list to store all elements with its priorities
Iterate over the entire thing to find the element with high priority
[ priority:3, priroty:1, priority:4, priority:2, priority:5]

*/

/* Optimised VERSION

Use a heap to store all elements
Call ExtractMax to get the element with high priority
Call insert to insert elements into heap in correct priority position

Create Priority Class:

  Class Name: 
    Priority Queue
  Properties:
    values: []

Also create Node class:

    Class Name:
      Node
    Properties:
      val
      priority

val doesn't matter, HEAP is constructed using PRIORITY

*/



/*
TIME COMPLEXITY is O(log n) for insertion and removal
*/