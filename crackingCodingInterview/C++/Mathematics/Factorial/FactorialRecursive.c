#include <stdio.h>

int Factorial( int val ){
    
    if (val == 0) return 1;
    return (val*Factorial(val-1))
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

