using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day05_OOP
{
    class DynamicStack
    {
        #region data type
        int[] arr;
        int size;
        int top;
        #endregion
        #region constractor
        public DynamicStack()
        {
            size = 6;
            arr = new int[size];
            top = 0;

        }
        public DynamicStack(int _size)
        {
            size = _size;
            arr = new int[size];
            top = 0;

        }
        #endregion
        #region Stack fun
        public void Push(int numper)
        {
            if (!IsFull())
            {
                arr[top] = numper;
                top++;
            }
            else
            {
                Console.WriteLine("stack is Full !!!!");
            }
            
        }
        public int Pop()
        {
            if (!IsEmpty())
            {
                top--;
                return arr[top];
                
            }
            else
            {
                Console.WriteLine("stack is Empty !!!!");
                return -1;
            }
        }
        public bool IsFull()
        {
            return top == size;
        }
        public bool IsEmpty()
        {
            return top == 0;
        }
        #endregion

    }
}
