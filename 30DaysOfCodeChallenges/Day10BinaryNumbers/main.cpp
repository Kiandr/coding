#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;


int main(){

	int n; 
	cin >> n;
	int counter = 0, maxCounter = 0;

	while (n)
	{
		const float rem = n % 2;  
		counter = (counter + rem) * rem;
		maxCounter = max(counter, maxCounter);        
		n >>= 1;
	}

	cout << maxCounter << endl;

	return 0;
}

