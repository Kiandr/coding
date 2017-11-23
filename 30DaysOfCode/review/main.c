#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>


void printEvenSpacedIndex(char *header, int len){
/*
Author: Kian D.Rad
Date: Nov 23rd 2017
ReadMe: Max length of the newArray is double, because, header may contain n even characters thus, leng = n^2 or n*n
*/
    // Define how many even characters. 
    char *prtEven = header; 
    int nEvens = 0;
while (prtEven<header+(len-1))
{
	if ((*prtEven%2)==0){
//	printf("%d and %s\n",*prtEven,(char*)prtEven);
		nEvens++;
	}
	prtEven++;
}
	char evenArray [len+nEvens];   
	char *prtH = header; 
	char *prtN = evenArray;
	
	while (prtH<=header+(len-1)){
		if (*prtH%2==0){
			*prtN++= *prtH++;
			*prtN++ = ' ';
		}
		else //if  (*prtH%2==1)
		{
			*prtN++ = *prtH++;
		}
			
		}
		
		for (int i =0; i<sizeof(evenArray)/sizeof(char);i++)
		{
			//printf("Here is %d,-> %c\n",i,evenArray[i]);
			printf("%c",evenArray[i]);
		}


}

int main() {

    char array[]={"Hacker"};
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */    
	printEvenSpacedIndex(array, sizeof(array)/sizeof(char));
    return 0;
}


