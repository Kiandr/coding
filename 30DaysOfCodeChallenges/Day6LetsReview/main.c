#include "stdio.h"
#include "string.h"

void foo(char *head, int len)
{
	// debugging
	//	printf("[%d\n",&, len);
	char *prtH = head; 
	int lenEv =0;
	int lenOd =0;
	{
		while (prtH<=(head+len) && *prtH != '\n')
		{
			if (*prtH%2 == 0)
				lenEv++;
			else 
				lenOd++;
			prtH++;
		}
//		printf("sizeof odd = %d\n", lenOd);
//		printf("sizeof even = %d\n", lenEv);
		char arrayEv[lenEv];
		char arrayOd[lenOd];
		
		char *prtArrayEv  = arrayEv;
		char *prtAarrayOd = arrayOd;
		
		prtH = head;

		while (prtH<=(head+len) && *prtH != '\n')
		{
			if (*prtH%2 == 0 &&*prtH!=0){
//				printf("Even letter is %d -> %c\n",*prtH, *prtH);
				*prtArrayEv++ = *prtH++;

			}
			else {
//				printf("Odd letter is %d -> %c\n",*prtH, *prtH);
				*prtAarrayOd++ = *prtH++;
			}
		}
//		printf("START\n");		
		for (int i=0;i<lenEv;i++)
			printf("%c",arrayEv[i]);
		printf(" ");
		for (int i=0;i<lenOd;i++)
			printf("%c",arrayOd[i]);
		printf("\n");		

		
	}
	
	
}

int main() {
	int loop=0;
	char array[100];

	scanf("%d",&loop);
	for (int i=0;i<loop;i++){
		scanf("%s", array);
		int len = strlen (array);
		char newArray [len];
		strcpy (newArray, array);
//		printf("[%lu->%s]\n", strlen(newArray), newArray);
		foo(newArray, sizeof(newArray)/sizeof(char));
	}
	

return 0;
}