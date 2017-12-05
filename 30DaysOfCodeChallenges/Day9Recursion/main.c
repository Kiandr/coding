#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int Factorial(int n) {

    // Complete this function
		// base class
		if (n<=1)
			return 1;
		else {
			// recusrive method
			return n*Factorial(n-1);
	}
}

int main() {
    int n; 
    scanf("%i", &n);
    int result;
	if (n>1 && n<13){
	result = Factorial(n);
    printf("%d\n", result);
	}
    return 0;
}