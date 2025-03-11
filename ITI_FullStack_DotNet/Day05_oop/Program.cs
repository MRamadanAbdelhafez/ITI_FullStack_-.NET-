namespace Day05_OOP
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region DynamicStack
            DynamicStack stackD_2 = new DynamicStack(4);

            stackD_2.Push(1);
            stackD_2.Push(2);
            stackD_2.Push(3);
            stackD_2.Push(4);
            stackD_2.Push(5);
            Console.WriteLine(stackD_2.Pop());
            Console.WriteLine(stackD_2.Pop());
            Console.WriteLine(stackD_2.Pop());
            Console.WriteLine(stackD_2.Pop());
            #endregion

            #region GenericStack
            GenericStack<char> stackG_2 = new GenericStack<char>(4);

            stackG_2.Push('a');
            stackG_2.Push('b');
            stackG_2.Push('c');
            stackG_2.Push('d');
            stackG_2.Push('e');
            stackG_2.Push('f');
            stackG_2.Push('g');
            Console.WriteLine(stackG_2.Pop());
            Console.WriteLine(stackG_2.Pop());
            Console.WriteLine(stackG_2.Pop());
            Console.WriteLine(stackG_2.Pop());
            Console.WriteLine(stackG_2.Pop());
            Console.WriteLine(stackG_2.Pop());
            Console.WriteLine(stackG_2.Pop());
            #endregion

            #region try complex operator overloding
            Complex c1 = new Complex
            {
                Real = 10,
                Img = 1
            };
            Complex c2 = new Complex
            {
                Real = -1,
                Img = -1
            };
            Complex c3 = new Complex();
            c3 = c1 + c2;
            Console.WriteLine(c3.print());
            c3++;
            Console.WriteLine(c3.print());
            --c3;
            Console.WriteLine(c3.print());
            
            Console.WriteLine((c3+10).print());
            Console.WriteLine((10 + c3).print());
            Console.WriteLine( c1 < c2);
            int testpars = c3;
            Console.WriteLine(testpars);
            #endregion
        }
    }
}
