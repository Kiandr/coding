using System;
using System.Collections.Generic;
namespace pairsSum
{
    class Program
    {
        public static Dictionary<int, int> myPairs(int [] myArr, int sumUp){
        Dictionary <int, int> returnPair = new Dictionary <int, int>();
        int len =  myArr.Length;
        Console.WriteLine("Array Size -> "+len);
        for (int i=0;i<myArr.Length;i++)
            for(int j=0;j<myArr.Length;j++)
            {
                if ((myArr[i]+myArr[j])==sumUp) 
                 if(!returnPair.ContainsKey(myArr[i]))
                    returnPair.Add(myArr[i], myArr[j]);
            }
        return returnPair;
        }
        static void Main(string[] args)
        {
            int [] myArray = {0,10,3,7,3,5,7,3};

            Dictionary <int, int> myDictionary = myPairs(myArray,10);
            foreach (var item in myDictionary)
            {
            Console.WriteLine("key {0} and value {0}",item.Key,item.Value);
            }
        }
    }
}
