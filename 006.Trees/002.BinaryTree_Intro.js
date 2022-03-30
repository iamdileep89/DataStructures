/*
Types of Trees --
  Tree
  Binary Tree
  Binary Search Tree (BST)

Tree --> is tree where each node can have any children
Binary Tree --> is a tree where each node has atmost 2 child nodes
Binary Search Tree (BST) --> 
  Special type of Binary Tree which is sorted
  All the values left of the given Node should be less than that Node
  All the values right of the given Node should be greater than that Node

*/

/*

HOW BST's WORK
  Every parent node should have atmost 2 children
  Every node to the left of the parent node is always less than the parent
  Every node to the right of the node is always greater than the parent

*/


/*
TIME COMPLEXITY

Insertion == O(log n) -- Best And Avg case
Searching == O(log n) -- Best and Avg case

Since, if the number of Nodes gets doubles, we may add 1 extra step to the execution
2*no.of nodes : 1 extra step --- 2^1
4*no.of nodes : 2 extra step --- 2^2
8*no.of nodes : 3 extra step --- 2^3

...... 2^n steps ie., log n to the base 2



In worst case, it will be O(n)



*/