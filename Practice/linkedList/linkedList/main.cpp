#include <iostream>
#include <stack>

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
		if(prt->prev!=nullptr)
		std::cout << "prev=" << prt->prev->val << std::endl;
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



int main() {
	struct Node *head = NULL;
	head = Add(head, 10);
	head = Add(head, 20);
	head = Add(head, 30);
	head = Add(head, 40);

	//print(head);
	//reverse(head);
	reverse_stack(head);
	std::cout << "End of progarm";
	return 0;
}