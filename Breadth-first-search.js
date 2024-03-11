const Queue = function() {
  this.items = [];
};
Queue.prototype.enqueue = function(obj) {
  this.items.push(obj);
};
Queue.prototype.dequeue = function() {
  return this.items.shift();
};
Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
};

const doBFS = function(graph, source) {
  const bfsInfo = [];
;
  for (let i = 0; i < graph.length; i++) {
    bfsInfo[i] = {
      distance: null,
      predecessor: null
    };
  }

  bfsInfo[source].distance = 0;

  const queue = new Queue();
  queue.enqueue(source);

  // Traverse the graph
  while (!queue.isEmpty()) {
    const vertex = queue.dequeue();
    // console.log(bfsInfo[source])
    console.log(vertex)
    for (let i = 0; i < graph[vertex].length; i++) {
      const neighbor = graph[vertex][i];
      // console.log(`Value of neighbor => ${neighbor}`)

      if (bfsInfo[neighbor].distance === null) {
        console.log("im emtpy and here's my distance: ", bfsInfo[neighbor].distance)
        bfsInfo[neighbor].distance = bfsInfo[vertex].distance + 1;
        bfsInfo[neighbor].predecessor = vertex;
        console.log("I'm not empty anymore, my distance " + bfsInfo[neighbor].distance +
          " and i'm: ", neighbor)
        console.log("My predecessor is " + bfsInfo[neighbor].predecessor +
          " and i'm: ", neighbor)
        queue.enqueue(neighbor);
        console.log(bfsInfo[neighbor])
      }
    }
  }
  //  
  //  For each neighbor v of u that has not been visited:
  //     Set distance to 1 greater than u's distance
  //     Set predecessor to u
  //     Enqueue v
  //
  //  Hint:
  //  use graph to get the neighbors,
  //  use bfsInfo for distances and predecessors 

  return bfsInfo;
};


const adjList = [
  [1],
  [0, 4, 5],
  [3, 4, 5],
  [2, 6],
  [1, 2],
  [1, 2, 6],
  [3, 5],
  []
];
const bfsInfo = doBFS(adjList, 3);
// for (const i = 0; i < adjList.length; i++) {
//     println("vertex " + i + ": distance = " + bfsInfo[i].distance + ", predecessor = " + bfsInfo[i].predecessor);
// }
