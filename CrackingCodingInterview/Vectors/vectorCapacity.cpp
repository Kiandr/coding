
// C++ program to illustrate the 
// capacity function in vector 
#include <iostream> 
#include <vector> 
  
using namespace std; 
  
int main() 
{ 
    vector<int> g1; 
  
    for (int i = 1; i <= 5; i++) 
        g1.push_back(i); 
       
        g1.at(0)=10;
        
  
    cout << "Size : " << g1.size(); 
    cout << "\nCapacity : " << g1.capacity(); 
    cout << "\nMax_Size : " << g1.max_size(); 
  
    // resizes the vector size to 4 
    g1.resize(4); 
  
    // prints the vector size after resize() 
    cout << "\nSize : " << g1.size(); 
  
    // checks if the vector is empty or not 
    if (g1.empty() == false) 
        cout << "\nVector is not empty"; 
    else
        cout << "\nVector is empty"; 
  
    // Shrinks the vector 
    g1.shrink_to_fit(); 
    cout << "\nVector elements are: "; 
    for (int i = 0; i != g1.size(); i++) 
        cout << "i=" <<g1.at(i) << " "<<std::endl; 
        cout<<"Front is "<<g1.front()<<std::endl; 
        cout<<"Back is "<<g1.back()<<std::endl; 
        cout<<"data is "<<g1.data()<<std::endl; 
        cout<<"@ is "<<g1.at(0)<<std::endl; 
        cout<<"pointer addition is "<<g1.at(0)+sizeof(int)<<std::endl; 
  
    return 0; 
} 