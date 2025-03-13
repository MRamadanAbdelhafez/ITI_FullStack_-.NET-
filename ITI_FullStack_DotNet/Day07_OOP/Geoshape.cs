using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day07_OOP
{
    abstract class Geoshape
    {
        protected double dim1;
        protected double dim2;
        public double Dim1
        {
            get{ return dim1;}
            set { dim1 = value; }
        }
        public double Dim2
        {
            get { return dim2; }
            set { dim2 = value; }
        }
        public Geoshape()
        {
            dim1 = 0;
            dim2 = 0;
            Console.WriteLine("this is in ctor of Geoshape of 0 param");

        }
        public Geoshape(double _dim1 ,double _dim2)
        {
            dim1 = _dim1;
            dim2 = _dim2;
            Console.WriteLine("this is in ctor of Geoshape of 2 param");

        }
        public Geoshape(double _dim)
        {
            dim1 = _dim;
            dim2 = _dim;
            Console.WriteLine("this is in ctor of Geoshape of 1 param");

        }

        public abstract double Area();
    }
}
