/*
A FIFO data structure - First In First Out
First element added to the Queue will be removed from the Queue first
  Eg: Background tasks, Uploading resources, Printing/Task processing etc.,

There is more then one way to implement Queue.
We can implement using LinkedLists Queue Class, Arrays etc
No built in stack in JavaScript
*/


/*
TIME COMPLEXITY

Insertion - O(1) // since add at End
Removal - O(1) // Since removing at beginning
Searching - O(n)
Access - O(n)

*/


/* Array Implementation 1 */
var q1 = []
q1.push("First")
q1.push("Second")
q1.push("Third")
console.log(q1) // ["First", "Second", "Third"]

q1.shift() // First
q1.shift() // Second
q1.shift() // Third


/* Array Implementation - 2 */
var q2 = []
q2.unshift("First")
q2.unshift("Second")
q2.unshift("Third")
console.log(q1) // ["Third", "Second", "First"]

q2.pop() // First
q2.pop() // Second
q2.pop() // Third



