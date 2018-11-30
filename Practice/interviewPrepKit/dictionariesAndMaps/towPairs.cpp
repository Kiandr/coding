#include <iostream>
#include <vector>
#include<map>
#include <utility>
#include <string>

bool aExistsInB(std::string prtToSubstring,char  prtB){
   
    for (int i=0;i<prtToSubstring.length();i++)
    if (prtToSubstring[i]==prtB) return 1;
    return 0;
}

char *twoPairs(std::string sA, std::string sB){
    std::string prtToSubstring;
    char *prtA =(char*) sA.c_str();
    char *prtB = (char*) sB.c_str();
    
                while (prtA != nullptr && *prtA!='\0'){
                    prtB =(char*) sB.c_str();
                    while (prtB != nullptr && *prtB!='\0'){
//                        std::cout<<"A= "<<*prtA<<" B= "<<*prtB<<std::endl;
                        if (tolower(*prtA)==tolower(*prtB)) {
                            if (!aExistsInB(prtToSubstring, tolower(*prtB)))
                                prtToSubstring+= tolower(*prtB);
                        }
                        prtB++;
                }
                prtA++;
     
        
    }
        return(char*) prtToSubstring.c_str();

}

int main(){
    std::cout<<twoPairs("Hello", "world");
    return 0;
    }
