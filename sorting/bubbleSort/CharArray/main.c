#include "stdio.h"
#include "stdbool.h"

void sort(char *head, int len){

bool go = false;
char *prtH = head;
	 // first loop
	 for (int j=0; j <len-1; j++) {
		 // second look
		 go = false;
		for (int i=0;i<len-1;i++){
			if (prtH[i]>prtH[i+1]){
			go = true; 
			char temp = prtH[i];
			prtH[i] = prtH[i+1];
			prtH[i+1] = temp;
	
		}	
	}
	if (go == false)
		break;

}


}


int main(){

	char array [] = {"HGFEDCBA"};
	int len = sizeof(array)/sizeof(char);
	
	
	
	for(int i=0; i<len; i++)
		printf("i = %d  [i]=%c\n", i,array[i]);


	sort(array, len);
	

	for(int i=0; i<len; i++)
		printf("i = %d  [i]=%c\n", i, array[i]);
	
	
	return 0;
}
