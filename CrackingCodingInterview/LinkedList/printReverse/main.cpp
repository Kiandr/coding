// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 *
 */
void reversePrint(SinglyLinkedListNode* head) {
    if (head == NULL) return ;
    SinglyLinkedListNode* prt = head;
     std::stack<int> myStack;
    while (prt!=NULL){
        myStack.push(prt->data);
        prt = prt->next;
    }
    while (!myStack.empty()){
        std::cout<<myStack.top()<<std::endl;
        myStack.pop();
    }
    return;
}