using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Day06_OOP
{
    
        class Rectangle
        {
            Point p1;
            Point p2;
            public Point P1
            {
                get
                {
                    return p1;
                }
                set
                {
                    p1 = value;
                }
            }
            public Point P2
            {
                get
                {
                    return p2;
                }
                set
                {
                    p2 = value;
                }
            }

            public Rectangle()
            {
                p1 = null;
                p2 = null;
                Console.WriteLine("this is in ctor of Rectangle of 0 param");
            }
            public Rectangle(Point _p1 ,Point _p2)
            {
                p1 = _p1;
                p2 = _p2;
                Console.WriteLine("this is in ctor of Rectangle of 2 param");
            }
            public string Print()
            {
                return $"Rectangle Start at {p1.Print()} and the End {p2.Print()}";
            }

        }
        class Triangle
        {
            Point p1;
            Point p2;
            Point p3;
            public Point P1
            {
                get
                {
                    return p1;
                }
                set
                {
                    p1 = value;
                }
            }
            public Point P2
            {
                get
                {
                    return p2;
                }
                set
                {
                    p2 = value;
                }
            }
            public Point P3
            {
                get
                {
                    return p3;
                }
                set
                {
                    p3 = value;
                }
            }

            public Triangle()
            {
                p1 = null;
                p2 = null;
                p3 = null;
                Console.WriteLine("this is in ctor of Triangle of 0 param");
            }
            public Triangle(Point _p1, Point _p2, Point _p3)
            {
                p1 = _p1;
                p2 = _p2;
                p3 = _p3;
                Console.WriteLine("this is in ctor of Triangle of 3 param");
            }
            public string Print()
            {
                return $"The head of Triangle  at {p1.Print()} ,  {p2.Print()} and {p3.Print()}";
            }
        }
    
}
