/*
We are building undirected Graph

class Graph {
    constructor(){
        this.adjacencyList = {} -- maintains vertex and its edge list
    }
}
*/


/* PSEUDOCODE

Method should accept vertex
It should add key to the adjcencylist with name of vertex and set is value to empty arr

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
    
}


let g = new Graph()
g.addVertex("Dallas")
g.addVertex("Tokyo")
g.addVertex("Aspen")


