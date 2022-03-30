/*
PSEUDOCODE

We can do it iteratively or Recursively

Create a new Node
Starting at root
  Check if there is root, if not, set new node as root
  If there is root, check the given value is > or < the value of root
  If value > root value, 
    check if there is node to the right
    if there is node, move to that node and repeat
    if there is no node, add newnode as right property
  If value < root value, 
    check if there is node to the left
    if there is node, move to that node and repeat
    if there is no node, add newnode as left property

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
}

var tree = new BinarySearchTree();

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)