// method translates a string into numbers that you dial that 1 to 9
// if any character cant be traslated throw an exception
// input 1800flowers

#include <iostream>
#include <string>
#include <vector>



char *ToLowerCase(char *inChar) {
	if (inChar == NULL) return NULL;
	char *prt = inChar;
	while (*prt != NULL && *prt != '\0') {
		if (*prt >= 'A' && *prt <= 'Z') *prt = *prt + 32;
		//if (*prt >= 'a' && *prt <= 'z') *prt = *prt - 32;
		prt++;
	}
	return inChar;
}
char *ToUpperCase(char *inChar) {
	if (inChar == NULL) return NULL;
	char *prt = inChar;
	while (*prt != NULL && *prt != '\0') {
		//if (*prt >= 'A' && *prt <= 'Z') *prt = *prt + 32;
		if (*prt >= 'a' && *prt <= 'z') *prt = *prt - 32;
		prt++;
	}
	return inChar;
}
char *flipCase(char *inChar) {
	if (inChar == NULL) return NULL;
	char *prt = inChar;
	while (*prt != NULL && *prt != '\0') {
		if (*prt >= 'A' && *prt <= 'Z') *prt = *prt + 32;
		if (*prt >= 'a' && *prt <= 'z') *prt = *prt - 32;
		prt++;
	}
	return inChar;
}
int getLen(char *inChar) {
	if (inChar == NULL || *inChar == '\0') return 0;
	char *prt = inChar;
	int len = 0;
	while (prt != NULL && prt != '\0') { prt++; len++; }
	return len;
}
static char* Transform(char *inChar) {
	std::string PhoneLetterSystem[] = { "abc", "def", "ghi", "jkl", "mno", "pqrs","tuv", "wxyz" };
	//std::string PhoneNumberSystem[] = { "0","1","2","3","4","5","6","7","8","9" };
	//char PhoneNumberSystem[] = { '0','1','2','3','4','5','6','7','8','9'};
	int PhoneNumberSystem[] = { 2,3,4,5,6,7,8,9 };
	static std::string  returnValue;
	char *prt = inChar;
	int test = atoi((char*)prt);
	if (atoi(prt) > 0 && atoi(prt) < 19999999999)
		returnValue.append(std::to_string(atoi(prt)));
	while (prt != NULL && *prt != '\0') {

		//else {
			for (int i = 0; i < 8/* PhoneLetterSystem->length()*/; i++) {
				const char* prtSystem = PhoneLetterSystem[i].c_str();

				while ((prtSystem != NULL && *prtSystem != '\0') && (prt != NULL && *prt != '\0')) {
					if (*prt == *prtSystem) {
						//std::cout << PhoneNumberSystem[i];
						returnValue.append(std::to_string(PhoneNumberSystem[i]));
						prtSystem = NULL;
						i = 8;
					}
					else prtSystem++;
				}
				//prtSystem = PhoneLetterSystem[i].c_str(); //cfilosz

			}
		//}
		prt++;
	}
	return (char*)returnValue.c_str();
}

static char* translate(char *inChar) {
	if (inChar == NULL) return 0;
	return 	Transform(ToLowerCase(inChar));
}

int main() {
	char myArray[] = "1800COMPUTE";
	printf("%s", translate(myArray));
	return 0;
}