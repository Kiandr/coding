#include <iostream>
#include <map>
#include <iterator>

static std::map <int, int> findPairsOfSum(int array[], int sum, int size){
    std::map <int, int> myPair;
    int len = size;
    if (array == NULL) return myPair;
    for (int i=0; i<len; i++)
        for (int j = i+1; j<len; j++)
        {
            if (array[i]+array[j] == sum)
                myPair.insert(std::pair<int,int>(array[i], array[j]));
        }
    return myPair;
}


int main(){
    std::map <int, int> pairs;
    int myArray[] = {0,10,3,7,3,5,7,3,5,5,4,6,2,8,1,9,10,10,10,0,8,2};
    //std::cout<<sizeof(myArray)/sizeof(*myArray)<<'\n'; //--> debugging purposes
    pairs = findPairsOfSum(myArray,10, sizeof(myArray)/sizeof(*myArray));
    // printing map
    std::map <int, int> :: iterator it;
    for (it = pairs.begin(); it != pairs.end(); ++it){
        std::cout<<it->first<<' '<<it->second <<'\n';
    }
    return 0;
}