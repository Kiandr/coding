#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <map>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   

		
		int val;
		string key;
		map <string,int> phoneBook;
		int loop = 0;

		cin>> loop;
		cin.ignore();

		for (int i=0;i<loop;i++)
		{
		cin>>key;
		cin.ignore();
		cin>>val;
		cin.ignore();
		phoneBook[key] = val;
		}
		 
		 
		 
		string name; 
		while(cin >> name) {
		    if (pBook.find(name) != pBook.end()) {
		        cout << name << "=" << pBook.find(name)->second << endl;
		    } else {
		        cout << "Not found" << endl;
		    }
		}
				   
    return 0;
}

