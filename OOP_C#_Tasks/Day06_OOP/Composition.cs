using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Day06_OOP
{
    
        #region Class Of Line 
        class Line
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

            public Line()
            {
                p1 = new Point();
                p2 = new Point();
                Console.WriteLine("this is in ctor of Line of 0 param");

            }
            public Line(int _p1_x, int _p1_y, int _p2_x, int _p2_y)
            {
                p1 = new Point(_p1_x, _p1_y);
                p2 = new Point(_p2_x, _p2_y);
                Console.WriteLine("this is in ctor of Line of 4 param");
            }
            public string Print()
            {
                return $"Line Start at {p1.Print()} and the End {p2.Print()}";
            }
        }
        #endregion

        #region Class of Circle
        class Circle
        {
            Point cn;
            int lin;

            public Point Cn
            {
                get
                {
                    return cn;
                }
                set
                {
                    cn = value;
                }
            }
            public int Lin
            {
                get
                {
                    return lin;
                }
                set
                {
                    lin = value;
                }
            }
            public Circle()
            {
                cn = new Point();
                lin = 5;
                Console.WriteLine("this is in ctor of Circle of 0 param");
            }
            public Circle(int _cn_x, int _cn_y, int _lin)
            {
                cn = new Point(_cn_x, _cn_y);
                lin = _lin;
                Console.WriteLine("this is in ctor of Circle of 3 param");
            }
            public string Print()
            {
                return $"The point of cinter is ${cn.Print()} and the radius is {lin} ";
            }
        } 
        #endregion

    
}
