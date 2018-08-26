// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 *
 */
void printLinkedList(SinglyLinkedListNode* head) {

    if (head == NULL) return;
    SinglyLinkedListNode* prt = head;
    while (prt!=NULL){
        std::cout<<prt->data<<std::endl;
        prt = prt->next;
    }
    return;

}