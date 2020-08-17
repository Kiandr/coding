#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    
    int t=0;
    cin>>t;
    for (int p=0;p<t; p++){
        unsigned n =0;
        unsigned k =0;
        unsigned max =0;
        cin>>n>>k;
        for (int i=1;i<=n; i++)
            for (int j=i+1; j<=n;j++){
                unsigned temp = 0;
                temp = i&j;
                if (temp>max && temp<k)
                    max=temp;}
        cout<<max<<endl;
    }
    
    return 0;
}


