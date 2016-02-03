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

	remove(data) {
		if(contains(data) === true) {
			var currentNode = this.root;
			while (currentNode.data !== data){
				
			}
		}
	}

	size() {

	}

	isEmpty() {
		if (this.root === null) {
			return true;
		} else {
			return false;
		}
	}
}
