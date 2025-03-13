using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day07_OOP
{
    class ParentEB
    {
        protected int x;
        public int X
        {
            get { return x; }
            set { x = value; }
        }
        public ParentEB()
        {
            int x = 0;
        }
        public ParentEB(int _x)
        {
            int x = _x;
        }
        public void Show()
        {
            Console.WriteLine("Iam in class of ParentEB");
        }
    }
    class ChildEB : ParentEB
    {
        protected int y;
        public int Y
        {
            get { return y; }
            set { y = value; }
        }
        public ChildEB()
        {
            y = 0;
        }
        public ChildEB(int _y)
        {
            y = _y;
        }
        public ChildEB(int _x, int _y) : base(_x)
        {
            y = _y;
        }
        public void Show()
        {
            Console.WriteLine("Iam in class of ChildEB");
        }

    }
    class SubChildEB : ChildEB
    {
        protected int z;
        public int Z
        {
            get { return z; }
            set { z = value; }
        }
        public SubChildEB()
        {
            z = 0;
        }
        public SubChildEB(int _z)
        {
            z = _z;
        }
        public SubChildEB(int _y, int _z) : base(_y)
        {
            z = _z;
        }
        public SubChildEB(int _x, int _y, int _z) : base(_x, _y)
        {
            z = _z;
        }
        public void Show()
        {
            Console.WriteLine("Iam in class of SubChildEB");
        }
    }
}