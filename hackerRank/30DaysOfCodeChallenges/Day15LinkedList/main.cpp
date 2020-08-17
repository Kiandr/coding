#include <iostream>
#include <string>


 typedef struct Node {
    int x;
    struct Node *next;
}Node;


class LinkedList {

protected: 
		Node *head;

public: 
	// polymogphosim constructor
	LinkedList(){};
	// constroctor with value
	LinkedList( int data){
		this->head = new Node();//malloc(sizeof(Node));
		this->head->x = data;
		this->head->next = NULL;
	}

	Node *getHeader(){
		return this->head;
	}


	Node* initNode( int n){
    Node *newNode = new Node();
    newNode->x = n;
    newNode->next = NULL;
    return newNode;
	}

	void addNode(int n){
		Node *prtH = this->head;
		while (prtH->next != NULL){
			//std::cout<<"prt:="<<prtH->x<<" && 0x0"<<prtH->next<<std::endl;
			prtH=prtH->next;
		}
		prtH->next = this->initNode(n);

	}
	
	Node* find(int a)
	{
		Node *prtH = this->head;
		while (prtH->next != NULL && prtH->x != a){
		//	std::cout<<"Print in loop: prt:="<<prtH->x<<" && 0x0 = "<<prtH->next<<std::endl;
			prtH=prtH->next;
		}
		if (prtH->x == a)
			return prtH;
		else return NULL;
		
	}
	
	void print(){
		Node *prtH = this->head;
		while (prtH->next != NULL){
			std::cout<<"prt:="<<prtH->x<<" && 0x0 = "<<prtH->next<<std::endl;
			prtH=prtH->next;
		}
		std::cout<<"prt:="<<prtH->x<<" && 0x0 = "<<prtH->next<<std::endl;
		
	}
	
	void remove (int a ){
		
		Node *prtPrev = this->head; ;
		Node *prtH = this->head;
		while (prtH->next != NULL && prtH->x != a){

			prtPrev = prtH;
			prtH=prtH->next;

		}
		if (prtH->x == a)
			prtPrev->next = prtH->next;
		
		
		
	}
	};
	

int main()
{
	LinkedList *service = new LinkedList(10);
	//std::cout<<service->getHeader()->next;

	service->addNode(11);
	service->addNode(12);
	service->addNode(13);
	service->addNode(14);
	service->addNode(15);
	
	
	std::cout<< "Find Test for 13 = "<<service->find(13)->x<<std::endl;
	std::cout<<"print before delete ======="<<std::endl;
	service->print();
	service->remove(11);
	std::cout<<"print AFTER delete ======="<<std::endl;
	service->print();
	
	delete	service;
	std::cout<<"print AFTER FREE ======="<<std::endl;
	service->print();
	return 0;
}