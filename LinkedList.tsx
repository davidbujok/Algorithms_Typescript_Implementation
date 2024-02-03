class NodePractice {
  data: number;
  nextNode: NodePractice | null
}

const node1 = new NodePractice()
const node2 = new NodePractice()
const node3 = new NodePractice()
const node4 = new NodePractice()
const node5 = new NodePractice()
node1.data = 5;
node2.data = 7;
node3.data = 9;
node4.data = 11;
node5.data = 13;
node1.nextNode = node2;
node2.nextNode = node3;
node3.nextNode = node4;
node4.nextNode = node5;
node5.nextNode = null;

class LinkedList {
  firstNode: NodePractice;

  read(index: number) {
    let currentNode: NodePractice = this.firstNode;
    let currentIndex: number = 0;

    while ( currentIndex < index ) {
      if ( currentNode.nextNode !== null ) {
        currentNode = currentNode.nextNode
        currentIndex += 1
      }
      if ( currentNode === null ) {
        return
      }
    }
    return currentNode.data
  }

  search(value: number) {
    let currentNode = this.firstNode;
    let currentIndex = 0;

    while (currentNode.nextNode !== null) {
      if (currentNode.data === value) {
        return currentIndex
      } else {
        currentIndex += 1
      }
      currentNode = currentNode.nextNode
    }
    if (currentNode.data === value) {
      return currentIndex
    } else {
      return null
    }
  }

  insert(index: number, newNode: NodePractice) {
    let currentNode = this.firstNode;
    let currentIndex = 0;
    while (currentIndex < index) {
      if (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode
        console.log(currentNode.data);
        currentIndex += 1
      }
    }
    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }
}

const newLinkedList = new LinkedList;
newLinkedList.firstNode = node1;

console.log("hope ",newLinkedList.search(11));
console.log("hope ",newLinkedList.search(13));
const node6 = new NodePractice()
node6.data = 55
newLinkedList.insert(3, node6)
console.log("hope ",newLinkedList.search(55));
console.log("hope ",newLinkedList.search(13));
