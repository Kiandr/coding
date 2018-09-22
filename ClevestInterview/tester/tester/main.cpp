#include <iostream>
#include <fstream>
#include <vector>
#include<algorithm>

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
	for (unsigned i =0; i< myList.size(); i++)
	{
		std::cout << myList.at(i).first<<myList.at(i).second<<std::endl;
	}
	return myList.size();

}

int main() {

	char myArray[] = "^v^v^v";

	printf("Numberof houses i visisted are %ld", MeterReader(myArray));
	return 0;
}
	
