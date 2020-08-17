#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;
class AdvancedArithmetic{
	public:
		virtual int divisorSum(int n)=0;
};


class Calculator: public AdvancedArithmetic{
	public:
		int divisorSum(int n){
			int sum =0;
			int divider =n;
			
			while (divider>0){
				if (n % (divider)==0){
//					cout<<n % (divider)<<"Divider"<<divider<<endl;
					sum += divider;
//					cout<<"SUMIS"<<sum<<endl;
				}
					divider--;
			}
			
//			cout<<"SUM BASE"<<endl;
			
			return sum;
		}
};


int main(){
    int n;
    cin >> n;
    AdvancedArithmetic *myCalculator = new Calculator(); 
    int sum = myCalculator->divisorSum(n);
    cout << "I implemented: AdvancedArithmetic\n" << sum<<endl;
    return 0;
}