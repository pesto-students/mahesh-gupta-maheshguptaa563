function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}
const stack = createStack();
console.log(typeof stack);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items); // => undefined


// createStack(); returns an object to stack which previosuly also included items:[], 
// therefore along with push() and pop(), items[] was also public,and we could easilu access items[] with the help of stack object.

// shifted the items array outside the return block and assigned a variable,
//  removed 'this' as i thought there is no use of it.
// 

// from google --> Encapsulation means information hiding. It's about hiding as much as possible of the object's internal parts and exposing a minimal public interface. The simplest and most elegant way to create encapsulation in JavaScript is using closures.
// Here we hide items[] array and the push(), pop() method makes use of closures to access items[] which is in the parents block
// closures definition : function along with its lexical scope 