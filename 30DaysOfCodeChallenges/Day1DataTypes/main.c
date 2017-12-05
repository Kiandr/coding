#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int i = 4;
    double d = 4.0;
    char s[] = "HackerRank";
	

    // Declare second integer, double, and String variables.
    int ii =0;
    float f =0;
    char ss[50];
    // Read and save an integer, double, and String to your variables.
    scanf("%d\n",&ii);
    scanf("%f\n",&f);
//    scanf("%s\n",ss);
	fgets(ss, 50, stdin);

    // Print the sum of both integer variables on a new line.

   
    printf("%d\n",i+ii);
    // Print the sum of the double variables on a new line.


    printf("%.1f\n",f+d);
    // Concatenate and print the String variables on a new line



    printf("%s%s\n",s,ss);
    // The 's' variable above should be printed first.
    





	return 0;
	}