#include "stdio.h"


/*
Author: Kian D.Rad
Date Nov 14th 2017
ReadMe: selection sort algorithm for int array
*/
void selectionSortInt( int *header, int len){

	int *key = header; 
	int* prtH = header;
	//int* prtE = header+len-1;
	// first iteration
	for (int i=0; i<len-1; i++){
		key = &prtH[i];
		int j = i;
				printf("key=%d. i= %d\n",*key,i);
		// second interation 
		while ( j>=0 && j<len)
			{
				if (prtH[j]>*key)
					printf("%d , %d", prtH[j],*key);
				
				// main sort condition 
				printf("j=%d. prtH[j]= %d\n",prtH[j],j);
				j++;			
			
			}				

		}
		
		
		
	
}

/*
Author: Kian D.Rad
Date Nov 14th 2017
ReadMe: selection sort algorithm for char array
*/
void selectionSortChar( char *header){}


/*
Author: Kian D.Rad
Date Nov 14th 2017
ReadMe: int main, sorts two arrays. Int anc Char array using selection sort algortihm
*/
/* Function to print an array */
void printArray(int arr[], int size)
{
    int i;
    for (i=0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\n");
}
 
// Driver program to test above functions
int main()
{
    int arr[] = {10 };
    int n = sizeof(arr)/sizeof(int);
    printArray(arr, n);
    selectionSortInt(arr, n);
    printf("Sorted array: \n");
    printArray(arr, n);
	
	return 0;
}