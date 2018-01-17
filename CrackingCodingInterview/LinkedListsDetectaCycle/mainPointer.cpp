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
    if (head==NULL){
        return false;
    }

    if (head->next == NULL)
        return false;
    
    if (head == head->next)
        return false; 
    
    struct Node *prtS = head->next->next;
    struct Node *prtF = head->next;



    while(prtF->next!=NULL && prtS!=NULL && prtF!=NULL){
       if (prtF==prtS)
           return true;
        prtF=prtF->next->next;
        prtS = prtS->next;
    }


    return false;
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

