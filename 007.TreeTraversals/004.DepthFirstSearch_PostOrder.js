/*
Depth First Search(BFS) - PostOrder
For a given node, traverse entire left first and then entire right next
Steps - Recursive
*/

/*
PSEUDOCODE

Create a data variable to store the nodes visited
Place root node in current variable
Write a helper function which accepts node
  If node has left, call helper function with left of that node
  If node has right, call helper funtion with right of that node
  Push the value of node into data variable
Invoke helper function with current variable
Return data variable
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
    DFSPreOrder(){
        var data = []
//         var current = this.root
        function traverse(node){
            data.push(node.value);
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root)
        return data;
    }
    DFSPostOrder(){
        var data = []
        function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            if(node.right){
                traverse(node.right)
            }
            data.push(node.value)
        }
        traverse(this.root);
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

tree.DFSPostOrder() //[2, 7, 5, 11, 16, 13, 10]


//          10
//     5          13
//  2     7    11     16