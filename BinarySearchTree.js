class Node {
    // Instantiate new node
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    // Initialize new tree
    constructor() {
        this.root = null;
    }
    
    // Insert value to the tree
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true) {
                // The condition will go on until reach the return
                if(value < currentNode.value) {
                    // If the value is lower than the current node, then the value will go to the left of the node
                    if(!currentNode.left) {
                        // If the current node has no `left`; if `left` === null, then the value will be the `left`
                        currentNode.left = newNode;
                        return this;
                    }
                    // If not, then the current node will go to the `left`
                    currentNode = currentNode.left;
                } else {
                    // The value will go to the right of the node
                    if(!currentNode.right) {
                        // If the current node has no `right`; if `right` === null, then the value will be the `right`
                        currentNode.right = newNode;
                        return this;
                    }
                    // If not, then the current node will go to the `right`
                    currentNode = currentNode.right;
                }
            }
        }
        return this;
    }

    // To see if a value is in a tree
    lookup(value) {
        // If the tree has no root, then the tree is empty, return false
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        // While the currentNode has value (not empty)
        while (currentNode) {
            if(value < currentNode.value) {
                // If the `value` is lower than the current node, then go to the `left`
                currentNode = currentNode.left;
            } else if(value > currentNode.value) {
                // If the `value` is greater than the current node, then go to the `right`
                currentNode = currentNode.right;
            } else if(value === currentNode.value) {
                // If we've found it, return the currentNode
                return currentNode;
            }
        }
        // If the value is not in tree, then return false
        return false;
    }

    // Remove a value of a tree
    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null; // To handle the parent node
        while(currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                // Matching!
                
                // Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }
                }

                // Option 2: Right child which doesn't have a left child
                else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }

                // Option 3: Right child that has a left child
                let leftmost = currentNode.right.left;
                let leftmostParent = currentNode.right;
                while(leftmost.left !== null) {
                    leftmostParent = leftmost;
                    leftmost = leftmost.left;
                }

                // Parent's left subtree is now leftmost's right subtree
                leftmostParent.left = leftmost.right;
                leftmost.left = currentNode.left;
                leftmost.right = currentNode.right;

                if (parentNode === null) {
                    this.root = leftmost;
                } else {
                    if (currentNode.value < parentNode.value) {
                        parentNode.left = leftmost;
                    } else if (currentNode.value > parentNode.value) {
                        parentNode.right = leftmost;
                    }
                }
            }
        }
        return true;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(10);
tree.insert(1);
tree.insert(5);
tree.insert(12);
tree.insert(7);

console.log(tree.lookup(5));
JSON.stringify(traverse(tree.root));

function traverse(node) {
    const tree = { value : node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}