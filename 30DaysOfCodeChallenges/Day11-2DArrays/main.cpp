#include <vector>
#include <iostream>
//#define max(a, b) ( (a) > (b) ? (a) : (b))
using namespace std;

void cSolution (){
	
	int maxA = 0;
    int x =0;
	int array [4][4];
    
	for (int i=0;i<4;i++)
			for (int j=0;j<4;j++)
	{
     x =    array[i][j]   + array[i][j+1]   + array[i][j+2]
                          + array[i+1][j+1]
          + array[i+2][j] + array[i+2][j+1] + array[i+2][j+2];
	
            //  if (x != 0 && x<0)
    		//	x= x*(-x);
	       	if (x>= maxA)
			     maxA = x;
		
	}
	printf("%d\n",maxA);
	
	
}

void stlSolution(){
    int maximum=-81; // (-9)x3x3
    vector< vector<int> > arr(6,vector<int>(6));
    for(int arr_i = 0;arr_i < 6;arr_i++){
       for(int arr_j = 0;arr_j < 6;arr_j++){
          cin >> arr[arr_i][arr_j];
       }
    }
    
    for (int i = 0;i < 4;i++){
       for(int j = 0;j < 4;j++){
           maximum=max(maximum, 
           arr[i][j]   + arr[i][j+1]   + arr[i][j+2]
                       + arr[i+1][j+1]
         + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
       }
    }
    cout << maximum << endl;
	
}
int main(){
	cSolution ();
    return 0;
}