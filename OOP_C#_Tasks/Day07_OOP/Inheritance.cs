using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day07_OOP
{
    class Rect : Geoshape
    {
        public Rect()
        {
            Console.WriteLine("this is in ctor of Rect of 0 param");

        }
        public Rect(double _d1 , double _d2):base(_d1,_d2)
        {
            Console.WriteLine("this is in ctor of Rect of 2 param");
        }
        public override sealed double Area()
        {
            return (dim1 * dim2);
        }
    }
    class Sq1 : Geoshape
    {
        public Sq1()
        {
            Console.WriteLine("this is in ctor of sq1 of 0 param");

        }
        public Sq1(double _d) : base(_d)
        {
            Console.WriteLine("this is in ctor of sq1 of 2 param");
        }
        public override double Area()
        {
            return (dim1 * dim2);
        }

    }
    class Sq2 : Rect
    {
        public Sq2()
        {
            Console.WriteLine("this is in ctor of sq2 of 0 param");

        }
        public Sq2(double _d1,double _d2) : base(_d1,_d2)
        {
            Console.WriteLine("this is in ctor of sq2 of 2 param");
        }
        
    }
    class CircleInh :Geoshape
    {
        public CircleInh()
        {

            Console.WriteLine("this is in ctor of CircleInh of 0 param");

        }
        public CircleInh(double _radius):base(_radius)
        {

            Console.WriteLine("this is in ctor of CircleInh of 1 param");

        }
        public override  double Area()
        {
            return Math.PI * dim1 * dim2;
        }

    }
    class Tri :Geoshape
    {
        public Tri()
        {
            Console.WriteLine("this is in ctor of Tri of 0 param");

        }
        public Tri(double _base ,double _height):base (_base ,_height)
        {
            Console.WriteLine("this is in ctor of Tri of 2 param");

        }
        public override double Area()
        {
            return 0.5 * dim1 * dim2;
        }
    }
}
