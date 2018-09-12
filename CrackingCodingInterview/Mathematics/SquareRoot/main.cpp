
#include <stdio.h>

double rootsqr( int x ){
	
	if (x==0) return 0;
	if (x==1) return 1;
	double i=2.0;
	
	double result = 2.0;

	while (i<x){
		i++;
		result = i*i;
	}
	return result;
	
}

int main(){
	
	for (int j=0;j<10;j++)
  printf("%d -> %f\n",j,rootsqr(j));
	
	return 0;
}

/*https://www.geeksforgeeks.org/square-root-of-an-integer/*/