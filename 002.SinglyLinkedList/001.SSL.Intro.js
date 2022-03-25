/*
It is a data structure that contains a HEAD, TAIL and LENGTH property
It consists of NODES
Each NODE has a VALUE and POINTER to another NODE or null
*/

/*
Do not have indexes
Connected via nodes with a next pointer
Random access is not allowd
*/

/*
TIME COMPLEXITY

Insertion - O(1)
Removal - It depends O(1) or O(n)
Searching - O(n)
Access - O(n)
*/

/*
Summary

SLL is excellent alternative to arrays in insertion and deletion
Array contains built in indexes but SLL not
This List DS consists of nodes which is foundation for other DS like Stacks and Queues
*/

// piece of data - val
// reference to next node - next

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

var first = new Node("Hi");
first.next = new Node("There!")
first.next.next = new Node("How")
first.next.next.next = new Node("Are")
first.next.next.next.next = new Node("You?")


// Ideally we need this kind of interface to add methods to it to perform push, pop, remove etc operations
class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}