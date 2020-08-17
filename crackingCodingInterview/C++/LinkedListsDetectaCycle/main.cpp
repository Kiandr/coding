/*
Detect a cycle in a linked list. Note that the head pointer may be 'NULL' if the list is empty.

A Node is defined as: 
    struct Node {
        int data;
        struct Node* next;
    }
*/

bool has_cycle(Node* head) {
    // Complete this function
    // Do not write the main method
    if (head==NULL){
        return false;
    }
    while(head->next!=NULL){
        if (head->next==NULL){
            return false;
        }
        
        if (head->next<head){
            return true;
        }
        head=head->next;
    }
    return false;
}



/*
Detect a cycle in a linked list. Note that the head pointer may be 'NULL' if the list is empty.

A Node is defined as: 
    struct Node {
        int data;
        struct Node* next;
    }
*/
// C
bool has_cycle(Node* head) {
    // Complete this function
    // Do not write the main method
    if (head==NULL)
        return false;

     Node *prtF = head->next;
     Node *prtS = head;
    
    while (prtF!=prtS)
    {
    if(prtF->next==NULL) return false;
        prtF=prtF->next->next;
        prtS = prtS->next;
    }
    
    return true;
}

// C++
Node* next(Node* node) {
    if (node)
        node = node->next;
    return node;
}

bool has_cycle(Node* head) {
    Node* slow = next(head);
    Node* fast = next(next(head));
    
    while (slow != fast) {
        slow = next(slow);
        fast = next(next(fast));
    }
    
    return fast;
}

