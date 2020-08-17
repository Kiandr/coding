#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <regex>
using namespace std;

int main(){

    int n;

    cin >> n;

    regex e(".+@gmail\\.com$");

    vector<string> arr;

    for(int i = 0; i < n; i++){

        string firstName;

        string emailID;

        cin >> firstName >> emailID;


        if(regex_match(emailID,e)){

            arr.push_back(firstName);

        }

    }
	// SLT sort(first,last);
	// Gives a range
    sort(arr.begin(),arr.end()); 

    for(int i = 0;i < arr.size();i++) 

        { 

        cout << arr[i] << endl; 

    }

    return 0;

}