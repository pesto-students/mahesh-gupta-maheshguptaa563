class Graph {
  #visited;
  constructor(n) {
    this.adjMatrix = new Array(n);
    for (let i = 0; i < n; i++) {
      this.adjMatrix[i] = [];
    }
    this.#visited = new Array(n).fill(0);
  }
  addEdge(v, w) {
    this.adjMatrix[v].push(w);
    this.adjMatrix[w].push(v);
  }
  printAdjMatrix() {
    console.log(this.adjMatrix);
  }
  pathExists(source, destination) {
    if (source == destination) {
      return true;
    }
    this.#visited[source] = 1;
    for (let i of this.adjMatrix[source]) {
      if (this.#visited[i] == 0) {
        if (this.pathExists(i, destination)) {
          return true;
        }
      }
    }
    return false;
  }
}

// const graph = new Graph(3);
// graph.addEdge(0, 1);
// graph.addEdge(1, 2);
// graph.addEdge(2, 0);

// console.log(graph.pathExists(1, 0));

const graph = new Graph(6);
const edges = [
  [0, 1],
  [0, 2],
  [3, 5],
  [5, 4],
  [4, 3],
];

for (let edge of edges) {
  graph.addEdge(edge[0], edge[1]);
}

graph.printAdjMatrix();
console.log(graph.pathExists(0, 5));
// console.log(graph2.pathExists(0, 5));
