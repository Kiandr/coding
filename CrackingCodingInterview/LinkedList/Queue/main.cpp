#include "stdio.h"
#include "stdlib.h"
struct Node{ 
    int data;
    struct Node *next;
}Node;
 struct Node *node(int data){ return ((struct Node*)malloc(sizeof(Node)));}

 struct LinkedList {    
    struct Node *head;
    struct Node *tail;
 }LinkedList;


struct LinkedList *popStack(struct LinkedList *list){
    if (list == NULL || list->head == NULL) return list;
    struct Node *prt = list->head; 
    struct Node *prev = list->head;
    while (prt->next != NULL) {
        prev = prt;
        prt = prt->next;
        }
        prev->next = NULL;
        list->tail = prev;

    return list;
}

struct LinkedList *popQueue(struct LinkedList *list){
    
    if (list == NULL || list->head == NULL) return NULL;
    
    struct Node *prt = (struct Node*)list->head->next;
    list->head = prt;
    return list;

    };



struct LinkedList *add(struct LinkedList *list, int data){
    if (list == NULL) {
        list = (struct LinkedList*)malloc(sizeof(LinkedList));
        list->head = (struct Node*)malloc(sizeof(Node));
        list->tail = (struct Node*)list->head;
        list->head->data = data;
        list->head->next = NULL;
        return list;
    }
    struct Node* prt = list->head;
    while (prt->next != NULL){
        prt = prt->next;
    }
    prt->next = (struct Node*)malloc(sizeof(Node));
    prt->next->data = data;
    prt->next->next = NULL;
    list->tail = (struct Node*)prt->next;
    return list;
    }


void print(struct LinkedList *list){
 if (list == NULL || list->head ==NULL) return;
    struct Node * prt = list->head;
    while (prt!= NULL){
        printf("%d\n", prt->data);
        prt=prt->next;
    }

}


    int main(){
        
        struct LinkedList *list = NULL;
        
        for (int i=10;i<=20;i++)
        list = add(list,i);
        
        list = popStack(list);
        print(list);
        
        return 0;
    }

