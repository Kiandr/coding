#include <bits/stdc++.h>

using namespace std;

// Complete the twoStrings function below.
string twoStrings(string s1, string s2) {

  unsigned int set1 = 0, set2 = 0;
  for (size_t k = 0; k < std::max(s1.size(), s2.size()); k++) {
    char c1 = (k < s1.size()) ? s1[k] : 0;
    char c2 = (k < s2.size()) ? s2[k] : 0;
    if (c1)
      set1 |= (1 << (c1 - 'a'));
    if (c2)
      set2 |= (1 << (c2 - 'a'));
    if (set1 & set2)
      return "YES";
  }
  return "NO";
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
