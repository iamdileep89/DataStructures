/*
Removing the Node from end of the Linked List
*/

/* PSEUDOCODE
If there are no nodes in the list, return undefined
Loop through the list, untill you reach the tail
Set next property of the 2nd to last node to be null
Set the tail property to be 2nd to last node
Decrement length of the list by 1
Return value of the node removed
*/


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;  // the current item
        var newTail = current; // temp value to keep track of the 2nd to last node
        while(current.next){
            newTail = current // assign current value to temp variable
            current = current.next // assign next value as current value
        }
        this.tail = newTail 
        this.tail.next = null
        this.length--
        if(this.length ===0){
            this.head = null
            this.tail = null
        }
        return current;
    }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("World")
list.push("How")
list.push("are")
list.push("you")
list.pop()
list.pop()
list.pop()





//     traverse(){
//         var current = this.head
//         while(current){
//             console.log(current.val)
//             current = current.next
//         }
//     }


