int height(Node* root) {

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
}