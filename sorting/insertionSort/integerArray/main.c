#include "stdio.h"

void sortArray( int const *header, int len){


	int *prtH = NULL;

	// this is a temp value that changes based on the iteration, its the right memebr of the first member of unsorted array
	int key=0;

	for (int i=0;i<len;i++){
		{
			// setup pointers for each iteration
			prtH = header[i];
			key = header[i+1];
			printf("key = %d, prtH=%d", key, *prtH)l;


		}
		
	}

}


int main(){

int array []={7,8,5,2,4,6,3};

int len = sizeof(array)/sizeof(int);

sortArray (array, len);

return 0;
}