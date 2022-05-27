var head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function findLoop(head) {
  // console.log(Node);
  let tortoise = head;
  let hare = head;
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      return true;
    }
  }
  return false;
}

var head = new Node(1);
var second = new Node(2);
var third = new Node(3);
var fourth = new Node(4);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = second;
console.log(findLoop(head));


