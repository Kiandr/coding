#include <bits/stdc++.h>

using namespace std;

// Complete the twoStrings function below.
bool aExistsInB(string prtToSubstring,char  prtB){
    for (int i=0;i<prtToSubstring.length();i++)
    if (prtToSubstring[i]==prtB) return 1;
    return 0;
}

string twoStrings(string sA, string sB) {
  std::string prtToSubstring;
  char *prtA = (char *)sA.c_str();
  char *prtB = (char *)sB.c_str();
  //sort(sA.begin(), sA.end());
  //sort(sB.begin(), sB.end());
  while (prtA != nullptr && *prtA != '\0') {
    prtB = (char *)sB.c_str();
    while (prtB != nullptr && *prtB != '\0') {
      if (tolower(*prtA) == tolower(*prtB)) {
        //if (!aExistsInB(prtToSubstring, tolower(*prtB)))
          prtToSubstring += tolower(*prtB);
        *prtB = '\0';
        }
      prtB++;
    //  if (tolower(*prtA) < tolower(*prtB)) 
      //  *prtB='\0';
       //prtB++;
    }
    prtA++;
  }
  return (prtToSubstring.length()>0)? "YES" : "NO";

}
int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    int q;
    cin >> q;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    for (int q_itr = 0; q_itr < q; q_itr++) {
        string s1;
        getline(cin, s1);

        string s2;
        getline(cin, s2);

        string result = twoStrings(s1, s2);

        fout << result << "\n";
    }

    fout.close();

    return 0;
}
