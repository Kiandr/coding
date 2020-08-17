#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

class Difference {
    private:
    vector<int> elements;
  
  	public:
  	int maximumDifference;
	Difference ( vector<int> a){
		this->elements = a;
	}
    void computeDifference(){
		float max;
		for (int i = 0;i<elements.capacity();i++)
					for (int j = 0;j<elements.capacity();j++){
						float temp = elements[i]-elements[j];
						if (temp>=max)
							max = temp;
					}
					this->maximumDifference = max;
	}
}; // End of Difference class

int main() {
    int N;
    cin >> N;
    
    vector<int> a;
    
    for (int i = 0; i < N; i++) {
        int e;
        cin >> e;
        
        a.push_back(e);
    }
    
    Difference d(a);
    
    d.computeDifference();
    
    cout << d.maximumDifference;
    
    return 0;
}