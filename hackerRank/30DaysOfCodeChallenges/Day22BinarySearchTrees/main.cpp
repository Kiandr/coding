#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <queue>
#include <iostream>

using namespace std;

typedef struct Node{
    struct Node* left;
    struct Node* right;
    int data;
}Node;
Node* newNode(int data){
    Node* node=(Node*)malloc(sizeof(Node));
    node->left=node->right=NULL;
    node->data=data;
    return node;
}
void levelOrder(Node * root){
      //Write your code here
    queue<Node*> array;
	array.push(root);
	while (!array.empty())
	{
    cout << array.front()->data << " ";
		if (array.front()->left != NULL)
		{
			array.push(array.front()->left);
		}

		if (array.front()->right != NULL)
		{
			array.push(array.front()->right);
		}

		array.pop();
	} 
}
	
/*	
Node *prtH = root; 

	if (prtH == NULL)
         return;
     
    if (prtH->left != NULL && prtH->right != NULL)
    {
        printf("%d ", prtH->left->data);
        printf("%d ", prtH->right->data);
        levelOrder (prtH->left);
        levelOrder (prtH->right);
    }
    else if (prtH->left != NULL)
    {
                printf("%d ", prtH->left->data);
                levelOrder (prtH->left);
    }
        else if (prtH->right != NULL)
    {
                printf("%d ", prtH->right->data);
                levelOrder (prtH->right);
    }


//    printf("front is %d\n",v.front());
   
    if (root){
        levelOrder(root->left);
        printf("%d ",root->data);
        levelOrder(root->right);
    }
  */  
	
	
	
	

Node* insert(Node* root,int data){
    if(root==NULL)
        return newNode(data);
    else{
        Node* cur;
        if(data<=root->data){
            cur=insert(root->left,data);
            root->left=cur;                
        }
        else{
            cur=insert(root->right,data);
            root->right=cur;
        }
        
    }
    return root;
}

int main(){
    Node* root=NULL;
    int T,data;
    scanf("%d",&T);
    while(T-->0){
        scanf("%d",&data);
        root=insert(root,data);
    }
    levelOrder(root);
    return 0;
    
}