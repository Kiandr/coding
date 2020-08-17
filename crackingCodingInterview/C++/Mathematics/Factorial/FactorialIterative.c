#include <stdio.h>

int Factorial( int val ){
    
    if (val == 0) return 1;
    int temp =1;
    for (int i=2;i<=val;i++)
     temp=temp*i;
    return temp;
}


int main ()
{
  int FactorialArray[10] =
    { 1,2,6,24,120,720,5040,40320,362880,3628800 };
  for (int i = 0; i < 10; i++)
    {
      printf ("Factorial [%d] is valid: [%d], Resulat Is %d and Expected resulat was %d\n", 
      i, Factorial (i) == FactorialArray[i] ? 1 : 0, Factorial (i), FactorialArray[i]);
    }
  return 0;
}

