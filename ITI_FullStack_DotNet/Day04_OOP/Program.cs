namespace Day04_OOP
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Difference between pass Reference Type and Value Type
            #region Before Swap
            //int num1 = 1;
            //int num2 = 2;
            //Console.WriteLine("Before Swap");
            //Console.WriteLine($"num1: {num1} , num2: {num2}"); 
            #endregion
            #region swap in Mian without function
            //int temp;
            //temp = num2;
            //num2 = num1;
            //num1 = temp;
            //Console.WriteLine("After Swap in Main without function");
            //Console.WriteLine($"num1: {num1} , num2: {num2}");
            #endregion
            #region swap value type with function
            //Utility opj = new Utility();
            //opj.swapByV(num1, num2);
            //Console.WriteLine("After Swap function by value");
            //Console.WriteLine($"num1: {num1} , num2: {num2}");

            //opj.swapByR(ref num1, ref num2);
            //Console.WriteLine("After Swap function by ref");
            //Console.WriteLine($"num1: {num1} , num2: {num2}");

            #endregion
            #region modify ref type by value with function
            //int[] arr = [1, 2, 3, 4, 5];
            //Console.WriteLine($"main arr identity {arr.GetHashCode()}");
            //Utility obj_2 = new Utility();
            //obj_2.printArrByV(arr);
            //Console.WriteLine("in main print at index (0)");
            //Console.WriteLine(arr[0]);
            #endregion
            #region modify ref type by ref with function
            //int[] arr2 = [1, 2, 3, 4, 5];
            //Console.WriteLine($"main arr identity {arr2.GetHashCode()}");
            //Utility obj_3 = new Utility();
            //obj_3.printArrByr(ref arr2);
            //Console.WriteLine("in main print at index (0)");
            //Console.WriteLine(arr2[0]);
            #endregion
            #endregion

            #region Create Object with Initialization
            Complex c1 = new Complex();
            Complex c2 = new Complex(10,5);
            Complex c3 = new Complex(3);
            Complex c4 = new Complex(_real:33,_img:0);
            Complex c5 = new Complex()
            {
                Img = -1,
                Real = 0
            };
            c1.Real=8;
            Console.WriteLine(c1.print());
            Console.WriteLine(c2.print());
            Console.WriteLine(c3.print());
            Console.WriteLine(c4.print());
            Console.WriteLine(c5.print());
            #endregion
        }
    }
}
