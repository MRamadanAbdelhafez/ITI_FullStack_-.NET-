using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day04_OOP
{
    class Utility
    {
        public void swapByV(int left,int right)
        {
            int temp;
            temp = left;
            left = right;
            right = temp;
        }
        public void swapByR(ref int left,ref int right)
        {
            int temp;
            temp = left;
            left = right;
            right = temp;
        }
        public void printArrByV(int[]arr)
        {
            Console.WriteLine($"Function Param identity : {arr.GetHashCode()}");
            Console.WriteLine($"the value of array is");
            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
            Console.WriteLine("modify in fun at index(0) = 15 ");
            arr[0] = 15;
        }
        public void printArrByr(ref int[] arr)
        {
            Console.WriteLine($"Function Param identity : {arr.GetHashCode()}");
            Console.WriteLine($"the value of array is");
            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
            Console.WriteLine("modify in fun at index(0) = 15 ");
            arr[0] = 15;
        }
    }
}
