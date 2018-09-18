#include "stdio.h"
#include "stdlib.h"

using namespace std;

class Node {
    public:
        int data;
        Node *left;
        Node *right;
        Node(int d) {
            data = d;
            left = NULL;
            right = NULL;
        }
};

class Solution {
    public:
  		Node* insert(Node* root, int data) {
            if(root == NULL) {
                return new Node(data);
            } else {
                Node* cur;
                if(data <= root->data) {
                    cur = insert(root->left, data);
                    root->left = cur;
                } else {
                    cur = insert(root->right, data);
                    root->right = cur;
               }

               return root;
           }
        }
        /*
class Node {
    public:
        int data;
        Node *left;
        Node *right;
        Node(int d) {
            data = d;
            left = NULL;
            right = NULL;
        }
};
*/


/*
struct node
{
    int data;
    node* left;
    node* right;
}*/

//void LevelOrder(node * root)
#include <queue>

void levelOrder(node* root)
{
    node * nodeList[10000];
    int n = 1;
    int i = 0;
    
    nodeList[0] = root;
    
    while (i < n) {

        if (nodeList[i]->left) {
            nodeList[n++] = nodeList[i]->left;
        }
        if (nodeList[i]->right) {
            nodeList[n++] = nodeList[i]->right;
        }
        i++;
    }
    
    for (int i = 0; i < n; i++)
        printf("%d ",nodeList[i]->data);
    
}




int main() {
  
    Solution myTree;
    Node* root = NULL;
    
    int t;
    int data;

    std::cin >> t;

    while(t-- > 0) {
        std::cin >> data;
        root = myTree.insert(root, data);
    }
  
	myTree.levelOrder(root);
    return 0;
}

