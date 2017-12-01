#include <iostream>

int main()
{
}


/*


#include "stdio.h"
#include "string.h"
#include "stdlib.h"
#include <stdio.h>
#include <string.h>

typedef struct node {
	char *key;
	int  data[8];
}node;


void addNewNode(char*   inputString){
	
	char *prtH = inputString;
	char *key;
	int val [8];
	int i=0;

	printf("%s--\n",(prtH));
	while (*prtH !=' '&& *prtH !='\n'){
			printf("%c",*prtH++);
			i++;
		}
	
		key  = (char*)malloc(i);
		prtH = inputString; 
		char *prtVal = (inputString+i+1);
		char *pp = prtVal;
		while (*prtH !=' '&& *prtH !='\n'){
			printf("%c",*prtH);
			*key++= *prtH++;
			}
	
			i=0;
			
		

	printf("\n");
	int k=0;
	while (*prtH >'0'&& *prtH <'0' &&*prtH !='\n'){

	
		printf("--%c---\n",*prtH);
		*prtVal = *prtH++;
				printf("--%c---\n",*prtVal++);
	}
	for (int k=0;k<8;k++)
	{
		printf("%c",*pp+k);
	}
		printf("\n END");

	

	
}




int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
/*	int loop = 0;
	scanf("%d",&loop);	
	char *placeHolder[loop]; 
	
	
	for (int i=0;i<loop;i++){
	placeHolder[i] = (char*)malloc(100);
	scanf("%s",placeHolder[i]);	

	}
	for (int i=0;i<loop;i++){
	printf("here is i %d -> %s\n",i,placeHolder[i]);
	}
*/
	char test [] = "TEST 12345678";
	addNewNode(test);
    return 0;
}


*/