var stack1 = [];
var stack2 = [];

function enQueue(element) {
  stack1.push(element);
}

function deQueue(element) {
  if (stack2.length === 0) {
    if (stack1.length === 0) {
      return "Cannot Dequeue because Queue is Empty";
    }
    while (stack1.length > 0) {
      var p = stack1.pop();
      stack2.push(p);
    }
  }
  return stack2.pop();
}

enQueue('a');
enQueue('b');
enQueue('c');
enQueue('d');
console.log(deQueue());
console.log(deQueue());
console.log(deQueue());
console.log(deQueue());
