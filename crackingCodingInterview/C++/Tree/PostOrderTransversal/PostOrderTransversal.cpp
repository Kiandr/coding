/* you only have to complete the function given below.  
Node is defined as  

struct node
{
    int data;
    node* left;
    node* right;
};

*/


void postOrder(node *root) {
    node *prtR = root;
    if (root==NULL)
        return;
    else 
    {
        if (prtR->left != NULL)
            postOrder(prtR->left);
        if (prtR->right != NULL)
            postOrder(prtR->right);
    printf("%d ",prtR->data);
    }
}

