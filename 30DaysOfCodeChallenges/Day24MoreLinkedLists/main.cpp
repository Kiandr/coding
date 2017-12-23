#include <cstddef>
#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;	
class Node
{
    public:
        int data;
        Node *next;
        Node(int d){
            data=d;
            next=NULL;
        }
};
class Solution{
    public:  
	    Node* removeDuplicates(Node *head)
	    {
	        if (!head)
	            return head;
        
	        Node *prtH = head->next;
	        Node *prtP = head;
	        while (prtH) {
	            if (prtH->data == prtP->data) {
	                prtP->next = prtH->next;
	                delete prtH;
	                prtH = prtP->next;
	            }
	            else {
	                if (prtH->data > prtP->data)
	                    prtP = prtH;
	                prtH = prtH->next;
	            }
	        }

        
        
	        return head;
	    }
    


  /*
  	Submitted this
 if (head == NULL)
                  return NULL;
              
              Node *node = head->next;
              Node *prevNode = head;
              
              while (node) {
                  if (node->data == prevNode->data) {
                      prevNode->next = node->next;
                      delete node;
                      node = prevNode->next;
                  }
                  else {
                      if (node->data > prevNode->data)
                          prevNode = node;                                          
                      node = node->next;
                  }
              }     
              
              return head;
	
	
	
  */


          Node* insert(Node *head,int data)
          {
               Node* p=new Node(data);
               if(head==NULL){
                   head=p;  

               }
               else if(head->next==NULL){
                   head->next=p;

               }
               else{
                   Node *start=head;
                   while(start->next!=NULL){
                       start=start->next;
                   }
                   start->next=p;   

               }
                    return head;
                
            
          }
          void display(Node *head)
          {
                  Node *start=head;
                    while(start)
                    {
                        cout<<start->data<<" ";
                        start=start->next;
                    }
           }
};
			
int main()
{
	Node* head=NULL;
  	Solution mylist;
    int T,data;
    cin>>T;
    while(T-->0){
        cin>>data;
        head=mylist.insert(head,data);
    }	
    head=mylist.removeDuplicates(head);

	mylist.display(head);
		
}