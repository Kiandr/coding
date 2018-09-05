Node *lca(Node *root, int a,int b) {
	if (root == NULL) return NULL;
	Node *prtR = root;
        
        while (prtR!=NULL)
        {
            if (prtR->data >a && prtR->data>b && prtR->left !=NULL)
                prtR = prtR->left;
            else if (prtR->data <a && prtR->data<b && prtR->right !=NULL)
                prtR = prtR->right;
            else return prtR;        
        }
    return root;
    }