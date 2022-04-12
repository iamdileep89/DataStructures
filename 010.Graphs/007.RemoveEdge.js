/*
We are building undirected Graph
*/


/* PSEUDOCODE

Method should accept 2 vertices
Filter vertex1 array to reassign the array which doesn't contain vertex2
Filter vertex2 array to reassign the array which doesn't contain vertex1

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
    
}


let g = new Graph()
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")


g.addEdge("Dallas", "Aspen")
g.addEdge("Dallas", "Tokyo")

g.removeEdge("Dallas", "Aspen")
g.removeEdge("Dallas", "Tokyo")


