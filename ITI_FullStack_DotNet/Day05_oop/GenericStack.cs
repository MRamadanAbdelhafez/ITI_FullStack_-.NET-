using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day05_OOP
{
    class GenericStack<T>
    {
        #region data type
        T [] arr;
        int size;
        int top;
        #endregion
        #region constractor
        public GenericStack()
        {
            size = 6;
            arr = new T[size];
            top = 0;

        }
        public GenericStack(int _size)
        {
            size = _size;
            arr = new T[size];
            top = 0;

        }
        #endregion
        #region Stack fun
        public void Push(T numper)
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
        public T Pop()
        {
            T result = default;
            if (!IsEmpty())
            {
                top--;
                result = arr[top];
                return result;
            }
            else
            {
                Console.WriteLine("stack is Empty !!!!");
                
            }
            return result;
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
