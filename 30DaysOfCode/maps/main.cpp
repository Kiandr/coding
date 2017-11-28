#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <map>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
	int loop = 0;
	scanf("%d",loop);
	char placeHolder[3]; 

	for (int i=0;i<loop;i++){
		scanf("%s",placeHolder[i]);
	}
	for (int i=0;i<loop;i++){
		printf("%s",placeHolder[i]);
	}

    return 0;
}

