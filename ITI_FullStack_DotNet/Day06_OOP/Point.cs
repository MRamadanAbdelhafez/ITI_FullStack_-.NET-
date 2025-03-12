using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day06_OOP
{
    class Point
    {
        int x;
        int y;

        public int X
        {
            get
            {
                return x;
            }
            set
            {
                x = value;
            }
        }
        public int Y
        {
            get
            {
                return y;
            }
            set
            {
                y = value;
            }
        }

        public Point()
        {
            x = 0;
            y = 0;
            Console.WriteLine("this is in ctor of Point of 0 param");

        }
        public Point(int _x, int _y)
        {
            x = _x;
            y = _y;
            Console.WriteLine("this is in ctor of Point of 2 param");
        }
        public string Print()
        {
            return $"({x},{y})";
        }
    }
}
