/*
    given a binary tree, and given a target sum
    we are looking for a path from the root to a leaf with a sum == target sum

*/

class Stack {
  constructor() {
    this.items = [];
  }

  // functions
  push(item) {
    // push element into the items
    this.items.push(item);
  }
  pop() {
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0) return "Underflow";
    return this.items.pop();
  }
  peek() {
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
  }

  // isEmpty function
  isEmpty() {
    // return true if stack is empty
    return this.items.length == 0;
  }

  // printStack function
  printStack() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + " ";
    return str;
  }
}

/**
 * time-complexity:
 *  - worst case, must visit every node
 *  - O(n)
 *
 * space-complexity:
 *  - recursive stack = height of tree = O(log(n))
 *  - aux space required for stack,
 *      - again worst case, stack depth = number of nodes in a tree -> O(n)
 *  - = O(n) + O(log(n))
 *  - O(n + log(n))
 *
 * @param {*} root
 * @param {*} sum
 */
function hasPathSum(root, sum) {
  if (!root) return false;

  // check leaf
  if (!root.left && !root.right) {
    return sum === root.val;
  } else {
    // continue DFS
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );
  }
}
