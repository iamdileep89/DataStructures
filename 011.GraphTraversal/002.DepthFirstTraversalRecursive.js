/*
Recursive PSEUDOCODE

DFS(vertex):
  if vertex is empty, return
  add vertex to the results list
  mark vertex as visited
  for each neighbour in vertex's neighbors:
    if neighbour is not visited:
        recursively call DFS on neighbour

*/

/*
DEPTH FIRST TRAVERSAL - Recursive Method

Function/method should accept starting node
create a list to store end result
create an object to store visited vertices
create helper function which accepts vertex
  - helper function should return early if vertex is empty
  - function should place vertex into result and visited variables
  - loop over all the values/vertices in the adjacency list for that vertex
  - if any of those values/vertices are not visited, recursively invoke helper func with that value/vertex

invole helper function with starting vertex
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
        // helper recursive function
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

g.depthFirstRecursive("A") //["A", "B", "D", "E", "C", "F"]

//            A
//          /   \
//         B     C
//         |     |
//         D --- E
//          \   /
//            F
