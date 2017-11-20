#include <iostream>

using namespace std;

class Person{
Pulic:
int age; 
void amOld();
void yearPasses();
};

// Implementation
Person::Person(int initialAge){

}
void Person:amOld(){

}

void Person:yeasPasses(){
}

int main(){
    int t;
	int age;
    cin >> t;
    for(int i=0; i < t; i++) {
    	cin >> age;
        Person p(age);
        p.amIOld();
        for(int j=0; j < 3; j++) {
        	p.yearPasses(); 
        }
        p.amIOld();
      
		cout << '\n';
    }

    return 0;
