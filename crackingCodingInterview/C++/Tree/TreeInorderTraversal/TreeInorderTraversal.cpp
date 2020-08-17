/* you only have to complete the function given below.  
Node is defined as  

struct node
{
    int data;
    node* left;
    node* right;
};

*/

void inOrder(node *root) {
    node *prtR = root;
    
    if (root == NULL)
        return;
    else {
        if(prtR->left != NULL)
            inOrder(prtR->left);
        printf("%d ", prtR->data);
        if(prtR->right!=NULL)
            inOrder(prtR->right);
    }

}
