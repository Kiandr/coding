#include<vector>
#include <iostream>
#include <any>
#include <string>
#include <fstream>
#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>
#include <iterator>

bool isInVector(std::vector<std::pair<int, int>> myVector, int first, int second){
    for(auto it = myVector.begin(); it!=myVector.end(); it++ ){
        if(it->first == first && it->second == second){
            return 1;
        }

}
            return 0;
}


// Complete the pairs function below.
std::vector<std::pair<int,int>>  pairs(int k, std::vector<int> arr) {
    std::vector<std::pair<int,int>> newVec;
    newVec.push_back(std::pair<int,int>(0,0));
    
    for (int i=0;i<arr.size();i++)
        for(int j=i+1;j<arr.size();j++)
            if (arr.at(i)+arr.at(j) == k){
                if (isInVector(newVec,arr.at(i), arr.at(j))!=1 ){
                std::cout<<arr.at(i)<< "---"<<arr.at(j) <<"Here is -->"<<arr.at(i)+arr.at(j) <<std::endl;
                    newVec.push_back(std::pair<int,int>(arr.at(i), arr.at(j)));}
            }
    
    return  newVec;
}

int main()
{
    
    std::vector<int> myvector;
    std::vector<int> test;
    std::vector<int>::iterator it = myvector.begin();
    
    // Adding randome values into the vector
    for (int i=0; i <100; i++)
//        myvector.push_back(rand() % 100);
        myvector.push_back(i);
    for (int i=0; i <100; i++)
        //        myvector.push_back(rand() % 100);
        myvector.push_back(i);
    
//    // Reading Vector with at operator
//    for (int i=0;i<myvector.size();i++)
//        std::cout<<myvector.at(i)<<std::endl;
//
//    // Transvers using the iterator
//    for (it = myvector.begin(); it !=myvector.end();++it)
//        std::cout<<*it<<std::endl;
//
//
//    for (it = myvector.begin(); it !=myvector.end();++it)
//        std::cout<<*it<<std::endl;
    
    
    std::vector<std::pair<int,int>> newVec;
    newVec = pairs(20, myvector);
    for(int i = 0; i < newVec.size(); i++)
        std::cout << newVec.at(i).first << ", " << newVec.at(i).second <<std::endl;

    return 0;
}
