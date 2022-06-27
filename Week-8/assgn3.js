class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}
let root;
function printorder() {
  var h = height(root);
  for (var i = 1; i <= h; i++) {
    printlevel(root, i);
  }
}

function height(root) {
  if (root == null) {
    return 0;
  } else {
    let lHeight = height(root.left);
    let rHeight = height(root.right);

    if (lHeight > rHeight) {
      return lHeight + 1;
    } else {
      return rHeight + 1;
    }
  }
}

function printlevel(root, level) {
  if (root == null) {
    return;
  }
  if (level == 1) {
    return root.data;
  } else if (level > 1) {
    printlevel(root.left, level - 1);
    printlevel(root.right, level - 1);
  }
}
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(printorder());
