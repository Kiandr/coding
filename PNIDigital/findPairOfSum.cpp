#include <iostream>
#include <map>
#include <iterator>

static std::map <int, int> findPairsOfSum(int array[], int sum){
    std::map <int, int> myPair;
    int len = sizeof(array);
    if (array == NULL) return myPair;
    for (int i=0; i<len; i++)
        for (int j = i+1; j<len; j++)
        {
            if (array[i]+array[j] == sum)
            myPair.insert({array[i], array[j]});
        }
    return myPair;
}


int main(){
    std::map <int, int> pairs;
    int myArray[] = {0,10,3,7,3,5,7,3};
    pairs = findPairsOfSum(myArray,10);
    // printing map
    std::map <int, int> :: iterator it;
    for (it = pairs.begin(); it != pairs.end(); ++it){
      std::cout<<it->first<<' '<<it->second <<'\n';
    }
    return 0;
}
