
#include "stdlib.h"
#include "stdio.h"

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

#include <vector>
using namespace std;
/*
struct node
{
    int data;
    node* left;
    node* right;
};

*/

void topView(node * root)
{

    node *prtR = root;
    if (root == NULL) return;
    else {
        
        vector <node*> vL;
        vector <node*> vR;
        
        while (prtR->left!=NULL)
        {
            vL.push_back(prtR->left);
            prtR = prtR->left;
        }
        prtR = root;
       while (prtR->right!=NULL)
        {
            vR.push_back(prtR->right);
            prtR = prtR->right;
        }
        for (int i=vL.size()-1; i>=0; i--)
            printf("%d ", vL[i]->data);
        
        printf("%d ", root->data);
        
        for (int i=0 ;i<vR.size(); i++)
            printf("%d ", vR[i]->data);
  
    }
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
  
	myTree.topView(root);
    return 0;
}

