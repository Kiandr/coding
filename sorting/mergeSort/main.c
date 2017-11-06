#include "stdio.h"

void mergeSort(int *head, int len){


if (len>0)
mergeSort(head,len/2);
mergeSort(head+(len/2)/len/2);

};


int main(){

int array []={38,27,43,3,9,82,10};

mergeSort (array, sizeof(array)/sizeof(int));

return 0;
}
