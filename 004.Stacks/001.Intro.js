/*
A LIFO data structure - Last In First Out
Last element added to the stack will the removed from the stack first
  Eg: JavaScript Callstack, Undo/Redo, Routing (web page history back/forward)

There is more then one way to implement stacks.
We can implement using LinkedLists, Arrays etc
No built in stack in JavaScript
*/

/*
TIME COMPLEXITY

Insertion - O(1) // since add at beginning
Removal - O(1) // Since removing at beginning
Searching - O(n)
Access - O(n)

*/


/* Array Implementation - 1 */

var stack1 = []
stack1.push("google")
stack1.push("instagram")
stack1.push("youtube")

console.log(stack1) // ["google", "instagram", "youtube"]

stack1.pop() // "youtube"
stack1.pop() // "instagram"
stack1.pop() // "google"


/* Array Implementation - 2 */
var stack2 = []
stack2.unshift("google")
stack2.unshift("instagram")
stack2.unshift("youtube")

console.log(stack2) //["youtube", "instagram", "google"]

stack1.shift() // "youtube"
stack1.shift() // "instagram"
stack1.shift() // "google"

