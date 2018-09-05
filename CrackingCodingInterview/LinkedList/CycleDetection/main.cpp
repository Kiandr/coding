// Complete the has_cycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 *
 */
bool has_cycle(SinglyLinkedListNode* head) {

    if (head == NULL) return false;
    if (head->next == NULL) return false;
  
    SinglyLinkedListNode *pF = head->next;
    SinglyLinkedListNode *pS = head;

    while (pF!=NULL && pF->next != NULL){
        if (pF == pS)
            return true;
        pF=pF->next->next;
        pS=pS->next;
    }
    return false;
}