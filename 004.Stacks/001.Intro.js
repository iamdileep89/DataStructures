/*
A LIFO data structure - Last In First Out
Last element added to the stack will the removed from the stack first
  Eg: JavaScript Callstack, Undo/Redo, Routing (React Router)

There is more then one way to implement stacks.
We can implement using LinkedLists, Arrays etc


*/


/* Array Implementation */

var stack1 = []
stack1.push("google")
stack1.push("instagram")
stack1.push("youtube")

console.log(stack1) // ["google", "instagram", "youtube"]

stack1.pop() // "youtube"
stack1.pop() // "instagram"
stack1.pop() // "google"


var stack2 = []
stack2.unshift("google")
stack2.unshift("instagram")
stack2.unshift("youtube")

console.log(stack2) //["youtube", "instagram", "google"]

stack1.shift() // "youtube"
stack1.shift() // "instagram"
stack1.shift() // "google"

