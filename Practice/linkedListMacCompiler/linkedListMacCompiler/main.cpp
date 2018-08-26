#include <iostream>
#include <stack>
#include <vector>

struct Node {
    int val;
    struct Node *next;
    struct Node *prev;
}Node;

struct Node * Add(struct Node *head, int a) {
    if (head == nullptr) {
        head = (struct Node*)malloc(sizeof(Node));
        head->next = nullptr;
        head->prev = nullptr;
        head->val = a;
        return head;
    }
    
    struct Node * prt = head;
    while (prt->next != NULL) {
        
        //prt->prev = prt;
        prt = prt->next;
    }
    prt->next = (struct Node*)malloc(sizeof(Node));
    prt->next->prev = prt;
    prt->next->val = a;
    prt->next->next = nullptr;
    return head;
    
}

void print(struct Node *head) {
    
    if (head == NULL) return;
    struct Node* prt = head;
    while (prt != NULL) {
        std::cout << prt->val<<std::endl;
        //   if(prt->prev!=nullptr)
        //     std::cout << "prev=" << prt->prev->val << std::endl;
        prt = prt->next;
    }
    return;
}


void reverse(struct Node *head)
{
    if (head == nullptr) return;
    struct Node *prt = head;
    while (prt->next != NULL)
        prt = prt->next;
    while (prt != NULL)
    {
        std::cout << prt->val << std::endl;
        prt = prt->prev;
    }
}

void reverse_stack(struct Node *head) {
    if (head == NULL) return;
    struct Node *prt = head;
    std::stack<int> mystack;
    
    while (prt != NULL) {
        mystack.push(prt->val);
        prt = prt->next;
    }
    while (!mystack.empty()) {
        std::cout << mystack.top()<<std::endl;
        mystack.pop();
    }
    
}

void reverseVector(struct Node * head) {
    
    if (head == NULL)
        return;
    
    struct Node * prt = head;
    std::vector<struct Node*> myVector;
    int size = 0;
    
    while (prt != NULL)
    {
        myVector.push_back(prt);
        size++;
        prt = prt->next;
    }
    
    for (int i = myVector.size()-1; i >= 0; i--)
        std::cout << myVector.at(i)->val<<std::endl;
    
    return;
}

struct Node *reverseList(struct Node *head){
    if (head == NULL) return head;
    struct Node *prt = head;
    struct Node *temp = head;
    struct Node *newHead = head;
    while (prt!=NULL){
        //temp = prt;
        temp = prt->prev;
        prt->prev = prt->next;
        prt->next = temp;
        newHead = prt;
        prt = prt->prev;
    }
    
    return newHead;
}


struct Node* insertNodeAtPosition(struct Node* head, int data, int position) {
    
    if (head == NULL) return head;
    struct Node *prt = head;
    int i = 1;
    while (prt!=NULL){
        if (i==position){
            struct Node *temp =  (struct Node*)malloc(sizeof(struct Node));
            temp->val = data ;
            temp->next = prt->next;
            prt->next = temp;
            return head;
            
        }
        i++;
        prt=prt->next;
        
    }
    return head;
    
}


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
bool has_cycle(struct Node* head) {
    if (head == NULL) return false;
    if (head->next == NULL) return false;
    
    struct Node*pF = head->next;
    struct Node*pS = head;
    
    while (pF!=NULL && pF->next != NULL){
        if (pF == pS)
            return true;
        pF=pF->next->next;
        pS=pS->next;
    }
    return false;
}

int main() {
    struct Node *head = NULL;
    head = Add(head, 10);
    head = Add(head, 20);
    head = Add(head, 30);
    head = Add(head, 40);
    insertNodeAtPosition(head, 25,2);
    //print(head);
    //reverse(head);
    //reverse_stack(head);
    //reverseVector(head);
    //head = reverseList(head);
    print(head);
    std::cout << "End of progarm";
    return 0;
}
