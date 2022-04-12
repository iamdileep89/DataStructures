/*
We are building undirected Graph

*/


/* PSEUDOCODE

Method should accept 2 vertices
Find vertex1 in adjcencylist and push vertex2 to its array
Find vertex2 in adjcencylist and push vertex1 to its array

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
    
}


let g = new Graph()
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")


g.addEdge("Dallas", "Aspen")
g.addEdge("Dallas", "Tokyo")


