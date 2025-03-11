using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day05_OOP
{
    class CircleQueue<T>
    {
        #region Data Type
        int start;
        int end;
        T[] arr;
        int maxsize;
        int size;
        #endregion

        #region Constractor
        public CircleQueue(int _size)
        {
            maxsize = _size;
            size = 0;
            arr = new T[maxsize];
            end = 0;
            start = 0;
        }
        public CircleQueue()
        {
            maxsize = 5;
            size = 0;
            arr = new T[maxsize];
            end = 0;
            start = 0;
        }
        #endregion

        #region Queue fun
        public void InQueue(T number)
        {
            if (!IsFull())
            {
                arr[end] = number;
                size++;
                end++;
                if (end >= maxsize)
                {
                    end = end % maxsize;
                }

            }
            else
            {
                Console.WriteLine("Queue is Full !!!");
            }
        }
        public T DeQueue()
        {
            T result = default;
            if (!IsEmpty())
            {
                result = arr[start];
                size--;
                start++;
                if (start >= maxsize)
                {
                    start = start % maxsize;
                }

            }
            else
            {
                Console.WriteLine("Queue is Full !!!");
            }
            return result;
        }
        public bool IsFull()
        {
            return size == maxsize;
        }
        public bool IsEmpty()
        {
            return size == 0;
        } 
        #endregion
    }
}
