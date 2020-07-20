#include<stdio.h>

int IsPowerOfTwo(int val){
	if (val ==0) return 0;
	while (val!=1){
		if (val%2!=0)
			return 0;
		val=val/2;				
	}
	return 1;

}

int main (){

	printf("[%d]\n",IsPowerOfTwo(8));
	printf("[%d]\n",IsPowerOfTwo(0));
	printf("[%d]\n",IsPowerOfTwo(7));
	return 0;	
}