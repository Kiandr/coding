#include <stdio.h>

int Fib(int val){
	// Adding space for 0
	int Fib[val+1];
	int i=0;
	// Dynamic Programming setting 0 and 1 case manually. 
	Fib[0] = 0;
	Fib[1] = 1;
	for ( i=2;i<=val;i++)
		Fib[i]= Fib[i-1]+Fib[i-2];

	return Fib[val];

	

}
int main(){
  int FibArray[20]= {0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765};
  for (int i=0;i<20;i++){
	printf("Fibonacci [%d] is valid: [%d], Resulat Is %d and Expected resulat was %d\n",i, Fib(i)==FibArray[i] ? 1:0,Fib(i),FibArray[i]);
  }
	return 0;
}