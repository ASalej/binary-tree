'use strict';

class BinaryTree {
	
	constructor() {
		this.root = null;
		this.count = 0;
	}

	insert(data) {
		var node = new Node(data, null, null);
		if (this.root === null) {
			this.root = node;
			this.count++;
		} else {
			var currentNode = this.root;
			while (currentNode !== null) {
				if (currentNode.data > data) {
					if (currentNode.left !== null) {
						currentNode = currentNode.left;
					}
					else {
						currentNode.left = node;
						this.count++;
						break;
					}
					
				} else if (currentNode.data < data){
					if (currentNode.right !== null) {
						currentNode = currentNode.right;	
					}
					else {
						currentNode.right = node;
						this.count++;
						break;
					}
				}
				else {
					break; 		// currentNode.data = data
				}
			}
		}
		
	}

	contains(data) {
		var currentNode = this.root;
		while(currentNode !== null){
			if (data === currentNode.data){
				return true;
				break;
			} else if (data < currentNode.data) {
					currentNode = currentNode.left;
				}
				else {
					currentNode = currentNode.right;
				}
		}
		if(currentNode === null) {
			return false;
		}
	}
	
	static popMinimal(root) {
		var parent = root;
		var minNode = root;
		while (minNode.left !== null) {
			parent = minNode;
			minNode = minNode.left;
		}
		parent.left = null;
		return minNode;
	}

	remove(data) {
		var currentNode = this.root;
		var parentNode;
		var leftNode;
		var rightNode;
		var newNode;
		while(currentNode !== null) {
			if (data === currentNode.data) {
				if (this.count === 1) {
					this.root = null;
					this.count = 0;
					break;
				}
				leftNode = currentNode.left;
				rightNode = currentNode.right;
				if (rightNode !== null) {
					newNode = BinaryTree.popMinimal(rightNode);
					newNode.left = leftNode;
					if (rightNode.data !== newNode.data) {
						newNode.right = rightNode;	 	
					}
				} else {
					newNode = leftNode;
				}
				if (parentNode.data < data) {
					parentNode.right = newNode;
				} else {
					parentNode.left = newNode;
				}
				this.count--;
				currentNode = null;
			} else if (data < currentNode.data) {
					parentNode = currentNode;
					currentNode = currentNode.left;
				}
				else {
					parentNode = currentNode;
					currentNode = currentNode.right;
				}
		}
	}

	size() {
		return this.count;
	}

	isEmpty() {
		if (this.root === null) {
			return true;
		} else {
			return false;
		}
	}
}
