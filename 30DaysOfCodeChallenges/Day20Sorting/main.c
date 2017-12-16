#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>

int main() {
	int n; 
	scanf("%d", &n);
    int *a = malloc(sizeof(int) * n);
    int *prtS = a;
    for(int i = 0; i < n; i++){
       scanf("%d",prtS+i);
    }
    
   
	int swap = 0;
	int *prtH = a;
	for (int i=0; i<n;i++){
			for (int j=0; j<n-i-1;j++){
				if (prtH[j]>prtH[j+1]){
					swap++;
					int temp = prtH[j];
					prtH[j]= prtH[j+1];
					prtH[j+1] = temp;
                }
			}
		}
		
/*		int *prtP = a;
		printf("===START=\n");
		for(int i = 0; i <= n+5; i++)
		printf("a[%d]=%d\n",i,prtP[i]);
		printf("\n===END=\n");
*/		
	    printf("Array is sorted in %d swaps.\n",swap);
		printf("First Element: %d \n",*a);
	    printf("Last Element: %d \n",a[n-1]);
		
	
    return 0;
}