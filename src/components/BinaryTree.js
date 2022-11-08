
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node
            return
        }

        let currentNode = this.root

        while (currentNode) {
            if (node.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = node
                    return
                }

                currentNode = currentNode.left
            }
            else {
                if (!currentNode.right) {
                    currentNode.right = node
                    return
                }

                currentNode = currentNode.right
            }
        }
    }
}

const BiTree = new BinaryTree()

export default function BinaryTreeFunc () {

    BiTree.add(8)
    BiTree.add(2)
    BiTree.add(10)
    BiTree.add(11)
    BiTree.add(8)

    console.log(BiTree)
}

