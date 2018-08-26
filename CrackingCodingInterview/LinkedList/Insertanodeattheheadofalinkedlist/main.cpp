// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 *
 */
SinglyLinkedListNode* insertNodeAtHead(SinglyLinkedListNode* llist, int data) {
    
    if (llist == NULL) {
        llist = (SinglyLinkedListNode*)malloc(sizeof(SinglyLinkedListNode*));
        llist->data = data;
        llist->next = NULL;
        return llist;
    }
    SinglyLinkedListNode* node = (SinglyLinkedListNode*)malloc(sizeof(SinglyLinkedListNode*));
    node->data = data;
    node->next = llist;
    return node;
  
}