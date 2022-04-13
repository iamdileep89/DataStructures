/*

Graphg Traversal - Visiting/Updating/Checking each vertex in graph
Uses:
  Peer to peer networking
  Web Crawlers
  Finding "closest" matches/recommendations
  Shortest Path problems
    GPS Navigation
    Solving mazes
    AI (shortest path to win the game)

*/
-----------------------------------------------------------------------------------------------
/*
Two Types of Graph traversal
  - Depth First Search Graph Traversal
  - Breadth First Search Graph Traversal
*/
-----------------------------------------------------------------------------------------------
/*
Depth First Search Graph Traversal
  Explore as far as possible down one branch before "backtracking"

Example:
           A
         /   \
        B     C
        |     |
        D --- E
         \   /
           F

Adjacency List:
  A: ["B", "C"]
  B: ["A", "D"]
  C: ["A", "E"]
  D: ["B", "E", "F"]
  E: ["C", "D", "F"]
  F: ["D", "E"]

Traversal Result = [A, B, D, E, C, F] or ["A", "C", "E", "F", "D", "B"]
*/