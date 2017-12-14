#include <cmath>
#include <iostream>
#include <exception>
#include <stdexcept>
using namespace std;

class Calculator {
  public: 
    Calculator(){};
    int power (int a, int b){
        
        // this is the very special point of this exercise. 
        if (a<0 || b<0)
        throw runtime_error("n and p should be non-negative");
		
        
        // resursive n power of p
		int power = a;
		
		// This is the special condition
		if (b ==0)
			return 1;
		
		// this is the end of the resurtion 
		else if (b ==1)
			return power;
		// this is the logic applied recusrively on all 
		else
			return power= power *this->power(power,b-1);	
    }
    
   
    
    
};

int main()
{
    Calculator myCalculator=Calculator();
    int T,n,p;
    cin>>T;
    while(T-->0){
      if(scanf("%d %d",&n,&p)==2){
         try{
               int ans=myCalculator.power(n,p);
               cout<<ans<<endl; 
         }
         catch(exception& e){
             cout<<e.what()<<endl;
         }
      }
    }
    
}