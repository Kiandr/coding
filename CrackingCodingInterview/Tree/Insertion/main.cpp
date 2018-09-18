
//Node is defined as 

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



    Node * insert(Node * root, int data) {

        if (root == NULL){
            root = (Node*)malloc(sizeof(Node));
            root->data = data;
            root->left = NULL;
            root->right = NULL;
            return root;
        }

            
        if ( root->data >data )
            root -> left = insert(root->left,data);
        if (root->data<data)
            root->right = insert(root->right,data);
        
        
        
        return root;
    }  