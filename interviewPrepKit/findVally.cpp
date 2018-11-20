#include <stdio.h>
#include <stdlib.h>
#include <string.h>


// Complete the countingValleys function below.
int countingValleys(int n, char* s) {
if (n==0) return n;
int valley =0;
int peak = 0;
char *prt; 
while(prt!=NULL && *prt != '\0'){
    if (n>0)
    {
        if (strupr(*prt++) == 'U')
        peak++;
        else
        valley--;
        if (valley==0)
    }
}


}

int main()
{
    char array[] = "UDUDUDUDUD";
    int result = countingValleys(sizeof(array)/sizeof(char), array);

    printf("%d\n", result);

    return 0;
}

