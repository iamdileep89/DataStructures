/*
Depth First Search(BFS) - PreOrder
Steps - Iterative
*/

/*
PSEUDOCODE

Create a queue(can be array) and a data variable to store the nodes visited
Place root node in queue
Loop as long as there are values in queue
  Dequeue a node from queue and push value of node into data variable
  If there is left for the node dequeued, add it to queue
  If there is righr for the node dequeued, add it to queue
Return the data variable ie., nodes visited
*/


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode
            return this
        } 
        var current = this.root
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this
                } 
                current = current.left
            } else if(value > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                found = true
            }
        }
        if(!found) return false;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;

        while(current && !found){
            if(value < current.value){
                current = current.left
            } else if(value > current.value){
                current = current.right
            } else {
                return true
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
            data=[],
            queue=[]
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

tree.BFS() // [10, 5, 13, 2, 7, 11, 16]


//          10
//     5          13
//  2     7    11     16