#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

void print(int n){
	
	if (n>=2 && n<=20)
		for (int i=0;i<10;i++){			
			printf("%d x %d = %d\n",n,i,(n*i));
		}
}

int main(){
    int n; 
    scanf("%d",&n);
    return 0;
}
