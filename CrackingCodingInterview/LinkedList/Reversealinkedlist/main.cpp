// Complete the reverse function below.
// https://www.geeksforgeeks.org/reverse-a-linked-list/
/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 *
 */
SinglyLinkedListNode* reverse(SinglyLinkedListNode* head) {
if (head == NULL || head->next == NULL) return head;
    SinglyLinkedListNode* prt = head;
    SinglyLinkedListNode* prev = NULL;
    SinglyLinkedListNode* next = NULL;
    
    
    while (prt!=NULL){
        next = prt->next;
        prt->next = prev;
        prev = prt;
        prt=next;
        next=next->next;
    }

    return prev;
}