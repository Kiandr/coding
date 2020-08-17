#include <iostream>
#include <vector>
#include <stdlib.h>

struct Node {
	int data;
	struct Node *l;
	struct Node *r;
}Node;

// For testing proposes:
// I create space on heap and return the pointer. so as long as this function runs in the same address table, then it should be accessable.
struct Node * newNode( int data) {
struct Node *temp = (struct Node*)malloc(sizeof(struct Node));
temp->data = data;
temp->l = NULL;
temp->r = NULL;
	return (temp);
}

void Add(struct Node *root, int data) {
	if (root == NULL) {
		root = (struct Node*)malloc(sizeof(struct Node));
		root->data = data;
	}

}

void printInOrder(struct Node * root) {
	if (root == NULL) return;
	printInOrder(root->l);
	printf("%d\n", root->data);
	printInOrder(root->r);

}
void printPreOrder(struct Node * root) {

	if (root == NULL) return;
	printf("%d\n", root->data);
	printPreOrder(root->l);
	printPreOrder(root->r);
	

}
void printPostOrder(struct Node * root) {
	if (root == NULL) return;
	printPostOrder(root->l);
	printPostOrder(root->r);
	printf("%d\n", root->data);

}

 void print(struct Node * root) {
	if (root == NULL) return ;
		print(root->l);
		print(root->r);
		printf("%d\n", root->data);
}


 // First property of a Binary tree is [2^(l-1)] where L=level
 int maxNodesAtLevel(int l) { return 0; }
 // Second maximim number of nodes at the Height h is (2^h)-1
 int MaxNodesInTreeofHeight(int h) { return 0; }

 // Min height with N nodes Log^2(N+1)
 int MinHeightTree() { return 0; }

 // Min Hheight with L leaves Log^2 L1+1
 int MinHeightWithLeaves(int l) { return 0; }

int main() {
	struct Node * root = (struct Node*)malloc(sizeof(Node));
	root = newNode(10);
	root->l = newNode(5);
	root->r = newNode(15);
	root->r->r = newNode(16);
	root->r->l = newNode(14);
	root->l->r = newNode(6);
	root->l->l = newNode(4);
	print(root);
	

	printPreOrder(root);
	printInOrder(root);
	printPostOrder(root);
	printf("END-OF-PROGRAM");
	return 0;
}