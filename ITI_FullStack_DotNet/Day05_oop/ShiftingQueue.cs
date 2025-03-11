using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day05_OOP
{
    class ShiftingQueue<T>
    {
        #region Data Type
        T[] arr;
        int size;
        int end;
        #endregion

        #region Constractor
        public ShiftingQueue(int _size)
        {
            size = _size;
            arr = new T[size];
            end = 0;
        }
        public ShiftingQueue()
        {
            size = 5;
            arr = new T[size];
            end = 0;
        }
        #endregion

        #region Queue fun
        public void InQueue(T number)
        {
            if (!IsFull())
            {
                arr[end] = number;
                end++;
                
            }
            else
            {
                Console.WriteLine($"the : {number} isn't stor in Queue because it is Full !!!");
            }
        }
        public T DeQueue()
        {
            T result = default;
            if (!IsEmpty())
            {
                result = arr[0];
                end--;
                for (int i = 0; i < end; i++)
                {
                    arr[i] = arr[i + 1];
                }
                
            }
            else
            {
                
                Console.WriteLine($"there is no element in  Queue it is Empty !!!");
            }
            return result;
        }
        public bool IsFull()
        {
            return end == size;
        }
        public bool IsEmpty()
        {
            return end == 0;
        }
        #endregion
    }
}
