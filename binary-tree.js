'use strict';

class BinaryTree {
	
	constructor() {
		this.root = null;
	}

	insert(data) {
		var node = new Node(data, null, null);
		if (this.root === null) {
			this.root = node;
		} else {
			var currentNode = this.root;
			while (currentNode !== null) {
				if (currentNode.data > data) {
					if (currentNode.left !== null) {
						currentNode = currentNode.left;
					}
					else {
						currentNode.left = node;
						break
					}
					
				} else if (currentNode.data < data){
					if (currentNode.right !== null) {
						currentNode = currentNode.right;	
					}
					else {
						currentNode.right = node;
						break;
					}
				}
			}
		}
	}

	contains(data) {

	}

	remove(data) {

	}

	size() {

	}

	isEmpty() {

	}
}
