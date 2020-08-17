#include <iostream>
#include <fstream>
#include <vector>
#include<algorithm>
#include <iostream>
#include <string>
#include <regex>
#include <algorithm>
#include <iterator>
#include <iostream>
#include <string>


// Public Implementation of a splitter patten 
std::vector<std::string> splitter(std::string in_pattern, std::string& content){
   std::vector<std::string> split_content;
    std::regex pattern(in_pattern);
    copy( std::sregex_token_iterator(content.begin(), content.end(), pattern, -1),
    std::sregex_token_iterator(),back_inserter(split_content));  
    return split_content;
}

int CounteVows(std::string incomingWord)
{
	int counter = 0;

	for (int i = 0; i < incomingWord.size() ; i++) // string knows its own size
	{
		if (incomingWord[i] == 'a' || incomingWord[i] == 'e' || incomingWord[i] == 'i' || incomingWord[i] == 'o' || incomingWord[i] == 'u' || incomingWord[i] == 'A' || incomingWord[i] == 'E' || incomingWord[i] == 'I' || incomingWord[i] == 'O' || incomingWord[i] == 'U')
		{
			counter++;
		}
	}

	return counter;
}

void PrintMyList(std::vector< std::pair<std::string,int> >myArray){
    	for (unsigned i =0; i< myArray.size(); i++)
	{
        if (myArray.at(i).second > 3)
		std::cout << myArray.at(i).first<<"--"<<myArray.at(i).second<<"\n";
	}
}




int HadDuplicate(char *head){

char *prt = head+1;
char *prev = head;
if (prt==NULL) return 0;
while(*prt!='\0' && prev<=prt){
    if (*prev == *prt) return 1;
    prt++;
    prev++;
}
return 0;
}

int check(std::string a, std::string b)
{ 
     return b.find_first_of(a) != std::string::npos;
}


int DoesContain(std::string word){

char A[]= "ab";
char B[]= "cd";
char C[]= "pq";
char D[]= "xy";
char *prt = (char*)word.c_str();

//while (prt != NULL && *prt!='\0'){
for (int i=0;i<word.length();i++){
    if ((prt[i] == A[0]) && (prt[i+1]==A[1])) return 1;
    if ((prt[i] == B[0]) && (prt[i+1]==B[1])) return 1;
    if ((prt[i] == C[0]) && (prt[i+1]==C[1])) return 1;
    if ((prt[i] == D[0]) && (prt[i+1]==D[1])) return 1;
}
    
    return 0;
}

int MoreThanThreeMyList(std::vector< std::pair<std::string,int> >myArray){
    	int counter = 0;
        for (unsigned i =0; i< myArray.size(); i++)
	{
        if ((myArray.at(i).second >= 3) && 
        (HadDuplicate((char*)myArray.at(i).first.c_str())>=1)&&
        !DoesContain(myArray.at(i).first))
		{counter++;
        std::cout << myArray.at(i).first<<"\n";
        }
	}
    return counter;
}
int main() {


	std::ifstream ifs("question03_input.txt");
	std::string s;
	getline(ifs, s, (char)ifs.eof());

	// checking if the file was opened properly!
	//std::cout<<s;
	
	// declaring character array 
    char * char_array = new char[s.length() + 1];
	strcpy(char_array, s.c_str());

	// copying the contents of the  point array 
	strcpy(char_array, s.c_str());


    std::vector<std::string> lineBylineArray = splitter("(\n)", s);
    
    std::pair<std::string,int> pairArray;
    std::vector< std::pair<std::string,int> >myArray;

	for (unsigned i =0; i< lineBylineArray.size(); i++)
	{
        pairArray.first = lineBylineArray.at(i);
        pairArray.second = CounteVows(lineBylineArray.at(i));
        myArray.push_back(pairArray);
	}

    std::cout<<(int)MoreThanThreeMyList(myArray)<<" words with more than 3 Vows inside the string";
	
	return 0;
}
	
