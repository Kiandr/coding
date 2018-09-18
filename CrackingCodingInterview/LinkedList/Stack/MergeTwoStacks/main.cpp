#include "stdio.h"
#include "stdlib.h"

struct Node{
    int data;
    struct Node *next;
}Node;
struct StackList {
    struct Node *head;
    struct Node *tail;
}StackList;
struct QueueList{
struct Node *head;
struct Node *tail;
}QueueList;

struct QueueList *Queue(struct QueueList * list, int data){
    if (list == NULL) return list;
    if (list->head == NULL){ list->head = (struct Node*) malloc( sizeof(Node) ); list->tail = list->head; list->head->next = NULL;return list;}
    struct Node *prt = list->head;
    while(prt->next != NULL) prt = prt->next; prt = (struct Node*)malloc(sizeof(Node)); prt->data = data; prt->next = NULL; list->tail = prt; 
    return list;
    };
struct QueueList *DeQueue(struct QueueList * list){
    if (list == NULL || list->head == NULL) return list;
    struct Node *prt = list->head->next;
    list->head = prt->next;
    return list;
    }
void PrintQueue(struct QueueList * list){
    
};
struct QueueList *MergeIntoQueue(struct StackList *listA, struct StackList *listB){
    if (listA == NULL || listB == NULL) return NULL;
    struct QueueList* QueuePrt = (struct QueueList*)malloc(sizeof(struct QueueList));

    struct Node *prtA = listA->head;
    struct Node *prtB = listB->head;

    while (( prtA!= listA->tail && prtA!=NULL)&&(prtB!=listB->tail && prtB!=NULL)){
       QueuePrt =  Queue(prtA, )
    }

    return NULL;};

struct StackList *AddStack(struct StackList *list, int data){
    // First In Last Out
    // Add to tailed return head
    // check for NULL prt at list and header
    if (list == NULL) {
        list  = (struct StackList*)malloc(sizeof(struct StackList));
        list->head = (struct Node*)malloc(sizeof(struct Node));
        list->head->next = NULL;
        list->head->data = data;
        list->tail = list->head;
        return list;
    }
    if (list != NULL && list->head == NULL){
        //list  = (struct StackList*)malloc(sizeof(struct StackList));
        list->head = (struct Node*)malloc(sizeof(struct Node));
        list->head->next = NULL;
        list->head->data = data;
        list->tail = list->head;
        return list;
    }
    struct Node* prt = list->head;
    while(prt->next!=NULL)
        prt=prt->next;
        prt->next = (struct Node*)malloc(sizeof(struct Node)); 
        prt->next->next = NULL; 
        prt->next->data = data; 
        list->tail = prt->next;

    return list;}
struct StackList *popStack(struct StackList *list){
    // First In Last Out
    // head = head->next; return head;
    
    if (list==NULL) return list;
    if (list->head == list->tail) {list->head = NULL; list->tail = NULL; return list;}
    struct Node* prt = list->head;
    list->head = prt->next;
    free(prt);

    return list;}

void PrintStack(struct StackList *list){
    if (list == NULL || list->head == NULL || list->tail == NULL) return ;
    if (list->head == list->tail) {printf(" head tail are the same %d",list->head->data); return;}
    struct Node *prt = list->head;
    
    while (prt <= list->tail && prt != NULL)
    {
        printf("%d\n", prt->data);
        prt = prt->next;
    }
    return;
}


int main(){

struct StackList *ListA = NULL;
struct StackList *ListB = NULL;
struct QueueList *queue = NULL;

for (int i=0;i<10;i++)
   ListA= AddStack(ListA,i);

for (int i=10;i<20;i++)
   ListB= AddStack(ListB,i);

PrintStack(ListA);
PrintStack(ListB);

queue = MergeIntoQueue(ListA, ListB);
//PrintQueue(queue);

return 0;
}