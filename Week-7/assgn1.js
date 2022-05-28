var head;
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function reversalLinkedList(node) {
  var current = node;
  var prev = null;
  var next = null;
  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  node = prev;
  return node;
}
function printList(node) {
  while (node != null) {
    console.log(node.data);
    node = node.next;
  }
}

head = new Node(85);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);
printList(head);
head = reversalLinkedList(head);
printList(head);
