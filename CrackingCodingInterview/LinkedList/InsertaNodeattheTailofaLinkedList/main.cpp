// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 *
 */
SinglyLinkedListNode* insertNodeAtTail(SinglyLinkedListNode* head, int data) {
    
    if (head == NULL) {
        head = (SinglyLinkedListNode*)malloc(sizeof(SinglyLinkedListNode*));
        head->data = data;
        head->next = NULL;
        return head;
    }
    if (head->next == NULL)
    {
        head->next = (SinglyLinkedListNode*)malloc(sizeof(SinglyLinkedListNode*));
        head->next->data = data;
        head->next->next = NULL;
        return head;
    }
    SinglyLinkedListNode* prt = head;
    while (prt->next !=NULL) prt = prt->next;
    prt->next = (SinglyLinkedListNode*)malloc(sizeof(SinglyLinkedListNode*));
    prt->next->data = data;
    prt->next->next = NULL;
    
    return head;
    
    
}
