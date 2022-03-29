/* Reverse a DLL */

/* 
PSEUDOCODE

Swap/Flip head and tail first using a current temp variable
Then, loop through the DLL
On each iteration, collect the current and next values of the current node
Then swap the pointers of the current node like next --> prev, prev-->next
Then set next as the current node to move forward in looping
Increment counter

*/


class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this;
    }
    pop(){
        if(!this.head) return undefined
        var poppedNode = this.tail;
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev // set tail as the prev of current tail
            this.tail.next = null // set new tail's next as null
            poppedNode.prev = null // remove connection of removed node with DLL
        }
        this.length--
        return poppedNode
    }

    shift(){
        if(this.length === 0) return undefined
        var oldHead = this.head;
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next // set head as the next of current head
            this.head.prev = null // set new head's prev as null
            oldHead.next = null // remove connection of removed node with DLL
        }
        this.length--
        return oldHead
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        /* Naive Solution looping entire list
        if(index <0 || index >= this.length) return null
        var count = 0;
        var current = this.head
        while(count != index){
            current = current.next
            count++
        }
        return current */

        // Optimised Solution
        if(index <0 || index >= this.length) return null
        if(index <= this.length/2){
            console.log("WORKING FROM START!")
            var count = 0;
            var current = this.head
            while(count != index){
                current = current.next
                count++
            }
            return current
        } else {
            console.log("WORKING FROM END!")
            var count = this.length-1;
            var current = this.tail
            while(count != index){
                current = current.prev
                count--
            }
            return current
        }
        
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }else{
            return false;
        }
    }
    insert(index, val){
        if(index <0 || index >= this.length) return false;
        if(index==0) return this.unshift(val);
        if(index==this.length) return this.push(val);
        
        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next

        beforeNode.next = newNode;
        newNode.prev = beforeNode

        afterNode.prev = newNode;
        newNode.next = afterNode;

        this.length++
        return this;
    }
    remove(index){
        if(index <0 || index >= this.length) return undefined;
        if(index==0) return this.shift();
        if(index==this.length-1) return this.pop();

        var removedNode = this.get(index);

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null
        removedNode.prev = null
        this.length--
        return removedNode;
    }
    print(){
        var arr = []
        var counter=0;
        var current = this.head
        while(counter!=this.length){
            arr.push(current.val)
            current = current.next
            counter++
        }
        return arr;
    }
    reverse(){
        var current = this.head // store head in a variable
        //swap or flip head and tail first
        this.head = this.tail
        this.tail = current
        
        var next, prev
        var counter = 0
        while(counter < this.length){
            // collect next and prev of current node
            next = current.next
            prev = current.prev
            
            // swap the pointers of the current node
            current.prev = next
            current.next = prev
            current = next // set the next node as current, to move forward in loop
            counter++
        }
    }
}

var list = new DoublyLinkedList()
list.push(100)
list.push(101)
list.push(102)
list.push(103)
list.push(104)
list.push(105)
list.push(106)
list.print()
list.reverse()
list.print()
