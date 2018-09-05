    Node *lca(Node *root, int a,int b) {

	// Write your code here.
	Node *prt = root;     
	 //if (root == NULL) return root;
	 if ( prt->data>a && prt->data > b && prt->left != NULL)
		 prt = lca(prt->left,a,b);
		 if ( prt->data<a && prt->data < b && prt->right != NULL)
             prt =lca(prt->right,a,b);
			 return prt; 
    }