/*
Iterative PSEUDOCODE

DFS(start):
  let S be a stack
  S.push(start)
  while S is not empty
    vertex = S.pop()
    if vertex is not labelled as discovered:
      visit vertex (add to result list)
      label vertex as discovered
      for each of vertex's neighbour
          if neighbour is not in visited, S.push(neighbour)

*/

/*
DEPTH FIRST TRAVERSAL - Iterative Method

Function/method should accept starting node
create a stack to keep track of vertices (list/array)
create list to store end result
create an object to store visited vertices
add starting vertex to stack and mark it visited
while stack has something in it
  - pop vertex from stack
  - if vertex is not visited
      mark it as visited
      add it to result list
      push all of its neighbours into stack
return result array

*/

class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2){
        if(this.adjacencyList[v1]) this.adjacencyList[v1].push(v2)
        if(this.adjacencyList[v2]) this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    dfs(neighbour)
                }
            })
        })(start)
        
        return result;
    }
    depthFirstIterative(start){
        const stack = [start]
        const result = []
        const visited = {}
        let currentVertex;
        
        visited[start] = true
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    stack.push(neighbour)
                }
            })
        }
        return result;
    }
}


let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

g.depthFirstIterative("A") //["A", "C", "E", "F", "D", "B"]

//            A
//          /   \
//         B     C
//         |     |
//         D --- E
//          \   /
//            F
