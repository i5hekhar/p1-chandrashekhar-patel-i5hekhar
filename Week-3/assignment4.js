function createStack() {
  let items = [];
  return {
    push: (item) => {
      items.push(item);
    },
    pop: () => {
      return items.pop();
    },
    getAllItems: () => {
      return items;
    },
  };
}

const stack = createStack();
console.log("Stack Initialized", stack);

stack.push(10);
console.log("STACK-Pushed a value", stack.getAllItems());

stack.push(5);
console.log("STACK-Pushed an another value", stack.getAllItems());

stack.pop();
console.log("STACK- popped last value", stack.getAllItems());
