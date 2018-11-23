using System;
using System.Collections.Generic;
using System.Reflection;
namespace DotNet
{
    public class Facad<T>where T:new(){

        public Facad(){}
        public T  Pairs(int [] array, int sum ){
            T myDic = new T();
            Console.WriteLine("Hello Controller");
            Console.WriteLine(myDic.GetType());
            return (T) myDic;
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            int [] myArray ={2,4,8,10};
            var getPair = new Facad<Dictionary<int,int>>().Pairs(myArray, 2);

            Console.WriteLine("End of main function ");
        }
    }
}
