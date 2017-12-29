#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    vector<int>a;
    vector<int>b;
    vector <int> c;
    int fine=0;
    
    for (int i=0;i<3;i++)
    {
        int temp =0;
        cin>>temp;
        a.push_back(temp);
    }
    for (int i=0;i<3;i++)
    {
        int temp =0;
        cin>>temp;
        b.push_back(temp);
        
        
    }
    
    int day =0;
    int month =1;
    int year = 2;
    
    
    c.push_back(a[day] - b[day]);
    c.push_back(a[month]-b[month]);
    c.push_back(a[year]-b[year]);
    
    
    if (c[year]>0)
        fine =10000;
    else if (c[month]>0 && c[year]==0)
        fine =500*c[month];
    else if (c[day]>0 && c[month]==0)
        fine =15*c[day];
    
    cout<<fine<<endl;
    return 0;
}

/*
 31 12 2009
 1 1 2010
 
 0
 
 1 1 2010
 31 12 2009
 10000
 
 8 4 12
 1 1 1
 10000
 
 */
