#include <iostream>
#include <fstream>
#include <vector>
#include<algorithm>

#include <iostream>
#include <string>
// Solution: Q1
long MeterReader(char *array) {
	long visitedHouses = 1;
	long x = 0;
	long y = 0;
	std::pair<long, long> coordinate;
	std::vector<std::pair<long, long> > myList;

	
	char *prt = array;
	std::pair<int, int>(x, y);
	
	while (prt != NULL && *prt != '\0') {
		if (*prt == '^')
			coordinate.second++;
		if (*prt == 'v')
			coordinate.second--;


		if (*prt == '>')
			coordinate.first++;


		if (*prt == '<')
			coordinate.first--;


		 auto res =  std::find(myList.begin(), myList.end(), coordinate);
		if (res == myList.end())
		 myList.push_back(coordinate);

		prt++;
	}
//	for (unsigned i =0; i< myList.size(); i++)
//	{
//		std::cout << myList.at(i).first<<myList.at(i).second<<std::endl;
//	}
	return myList.size();

}

int main() {


	std::ifstream ifs("question02_input.txt");
	std::string s;
	getline(ifs, s, (char)ifs.eof());

	// checking if the file was opened properly!
	//  std::cout<<s;
	int n = 10;
	 //n = s.length();

	// declaring character array 

	char * char_array = new char[s.length() + 1];
	//strcpy(char_array, s.c_str());


	// copying the contents of the  point array 
	strcpy(char_array, s.c_str());


	char myArray[] = "^v^v^v";

	printf("Numberof houses I have visisted is %ld", MeterReader(char_array));
	return 0;
}
	
