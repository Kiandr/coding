#include "stdio.h"




void insertSort(int *const head, int len) {



	// key is the right memer
	int *key = head;
	int *prtH = head;
	int *prtN = head + 1;
	int *prtE = head + len;

	for (int i = 0; i < len, i++;) {
		// review get key, and compair the key with all other sorter array. 
		//	for(int i =0; i<len;i++)
		// key is the right memer
		 key = head+i;
		 prtH = head+i;
		 prtN = head + 1+i;
		 prtE = head + i+len;
		while (prtN < prtE)
		{
			//	printf(" prtH = %d and key = %d\n", *prtH,*key);
			key = prtN;
			if (*prtH > *key) {
				int k = 0;
				printf(" prtH = %d and key = %d\n", *prtH, *key);
				while (prtH == head)
				{

					if (*prtH > *key)
					{
						int temp = *prtH;
						*prtH = *key;
						*key = temp;
						prtH--;
						prtN--;
					}


					else
					{
						*prtN = *prtH;
					}
					printf(" prtH = %d and key = %d\n", *prtH, *key);
					prtH--;
					prtN--;
					k++;


				}
				prtH = prtH + k;
				prtN = prtN + k;
				printf(" prtH = %d and key = %d\n", *prtH, *key);
			}
			prtH++;
			prtN++;
		}

	}

}



int main() {

	int array[] = { 1,2,4,3,5,6,7 };


	insertSort(array, sizeof(array) / sizeof(int));
	printf("=======\n");
	for (int i = 0; i<sizeof(array) / sizeof(int); i++) {
		printf(" prtH = %d and i = %d\n", array[i], i);

	}
	printf("=======\n");





	return 0;
}
