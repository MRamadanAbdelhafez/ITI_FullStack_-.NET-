using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day07_OOP
{
    class ParentLB
    {
        protected int x;
        public int X
        {
            get { return x; }
            set { x = value; }
        }
        public ParentLB()
        {
            int x = 0;
        }
        public ParentLB(int _x)
        {
            int x = _x;
        }
        public virtual void Show()
        {
            Console.WriteLine("Iam in class of ParentLB");
        }
    }
    class ChildLB : ParentLB
    {
        protected int y;
        public int Y
        {
            get { return y; }
            set { y = value; }
        }
        public ChildLB()
        {
            y = 0;
        }
        public ChildLB(int _y)
        {
            y = _y;
        }
        public ChildLB(int _x, int _y) : base(_x)
        {
            y = _y;
        }
        public override void Show()
        {
            Console.WriteLine("Iam in class of ChildLB");
        }

    }
    class SubChildLB : ChildLB
    {
        protected int z;
        public int Z
        {
            get { return z; }
            set { z = value; }
        }
        public SubChildLB()
        {
            z = 0;
        }
        public SubChildLB(int _z)
        {
            z = _z;
        }
        public SubChildLB(int _y, int _z) : base(_y)
        {
            z = _z;
        }
        public SubChildLB(int _x, int _y, int _z) : base(_x, _y)
        {
            z = _z;
        }
        public override void Show()
        {
            Console.WriteLine("Iam in class of SubChildLB");
        }
    }

}
