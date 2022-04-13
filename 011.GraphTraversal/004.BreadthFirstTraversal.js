/*
PSEUDOCODE

Function should accept a start vertex
Create a queue(use an arr) and place start vertex in it
create an arr to store nodes visited, which is end result
create an obj to store nodes visited
mark start vertex as visited
Loop as long as there is anything in queue
Remove first vertex from queue and push it into the arr that stores nodes visited
Loop over each vertex in adjacency list of vertex which you are visiting
if it is not inside object that stores nodes visited, mark it as visited and enqueue that vertex
once finished with looping, return arr of visited nodes

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
    breadthFirst(start){
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex;
        
        visited[start] = true;
        while(queue.length){
            console.log(queue)
            currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })
            /* To get diff order
            this.adjacencyList[currentVertex].slice().reverse().forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })
            */
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


g.breadthFirst("A")  // ["A", "B", "C", "D", "E", "F"]

//            A
//          /   \
//         B     C
//         |     |
//         D --- E
//          \   /
//            F
