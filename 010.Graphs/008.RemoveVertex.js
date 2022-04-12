/*
We are building undirected Graph
*/


/* PSEUDOCODE

Method should accept a vertex
Loop as long as there are 0 items in the vertex array of adjacency List
Inside loop call, removeEdge with vertex we are removing and any value in the adjacency list for that vertex
Delete key in adjacency list for that vertex

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
}


let g = new Graph()
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")

g.addEdge("Dallas", "Aspen")
g.addEdge("Dallas", "Tokyo")

g.removeVertex("Aspen")

