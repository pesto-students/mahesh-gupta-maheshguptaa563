class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}
let root;
function isBST(node) {
  if (node === null) {
    return true;
  }
  if (node.left != null && node.left.data > node.data) {
    return false;
  }
  if (node.right != null && node.right.data < node.data) {
    return false;
  }
  if (!isBST(node.left) || !isBST(node.right)){
    return false;
  }
  return true;
}
root = new Node(9);
root.left = new Node(8);
root.right = new Node(12);
root.left.left = new Node(4);
root.left.right = new Node(10);

console.log(isBST(root));
