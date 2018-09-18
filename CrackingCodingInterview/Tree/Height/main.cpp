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
// My solution :: 
int height(Node* root) {
    int lH = 0, rH = 0;
    Node * prt = root;
    if (root == NULL) return 0;
    else if (root->right==NULL && root->left==NULL) return 0;
        else {
            if (prt->left)
                lH = height(prt->left);
            if (prt->right)
                rH = height(prt->right);
        }
        return (rH>lH ? rH+1 : lH+1);
}

}; //End of Solution

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
  
    int height = myTree.height(root);
    
  	std::cout << height;

    return 0;
}

