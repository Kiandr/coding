#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;
bool isPrime (int n){
    bool prime = true;
    int sq = (int)sqrt(n);
    if (n <= 1 || (n & 1) == 0)
        prime = false;
    
    if (n == 2)
        prime = true;
    else {
        for (int i = 3; i <= sq; i += 2)
            if (n % i == 0){
                prime = false;
                break;
            }
    }
    
    return prime;
}

int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    
    int n;
    cin>>n;
    int array[n];// = (malloc(n*sizeof(int)));
    for (int i=0;i<n;i++){
        int temp;
        cin>>temp;
        array[i] = temp;
    }
    int t = sizeof(array)/sizeof(int);
    for (int i=0; i<t; i++)
        cout << ((isPrime(array[i])) ? "Prime\n" : "Not prime\n");
    
    return 0;
}






