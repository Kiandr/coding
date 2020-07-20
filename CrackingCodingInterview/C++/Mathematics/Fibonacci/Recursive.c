
#include<stdio.h>
#include <stdbool.h>



int Fib(int val){
	
//	if (val==0)	return 0;
//	if (val==1)	return 1;
	if (val<=1) return val;
	return Fib(val-1)+Fib(val-2);
}
int main(){
  int FibArray[20]= {0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765};
  for (int i=0;i<20;i++){
	printf("Fibonacci [%d] is valid: [%d], Resulat Is %d and Expected resulat was %d\n",i, Fib(i)==FibArray[i] ? 1:0,Fib(i),FibArray[i]);
  }
	return 0;
}