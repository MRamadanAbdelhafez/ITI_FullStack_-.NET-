namespace task2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region 1-one employee read and write
            Employee e1 = new Employee();

            Console.WriteLine("Enter id");
            e1.SetId(int.Parse(Console.ReadLine()));

            Console.WriteLine("Enter name");
            e1.SetName(Console.ReadLine());

            Console.WriteLine("Enter salary ");
            e1.SetSalary(int.Parse(Console.ReadLine()));

            Console.WriteLine("Enter your age");
            e1.SetAge(int.Parse(Console.ReadLine()));

            Console.WriteLine(e1.print());

            #endregion
            #region 2-array of 3 employees read and write
            Employee[] employees = new Employee[3];
            for (int i = 0; i < employees.Length; i++)
            {
                employees[i] = new Employee();
                Console.Write($"Enter id of emp num {i + 1} : ");
                employees[i].SetId(int.Parse(Console.ReadLine()));

                Console.Write($"Enter name of emp num {i + 1} : ");
                employees[i].SetName(Console.ReadLine());

                Console.Write($"Enter salary of emp num {i + 1}  : ");
                employees[i].SetSalary(int.Parse(Console.ReadLine()));

                Console.Write($"Enter your age of emp num {i + 1}  : ");
                employees[i].SetAge(int.Parse(Console.ReadLine()));

            }
            for (int i = 0; i < employees.Length; i++)
            {
                Console.WriteLine(employees[i].print());
            }
            #endregion
            #region 3-one complex number read and write
            Complex c1 = new Complex();

            while (true)
            {
                Console.Write("Enter the  real part : ");
                c1.SetReal(int.Parse(Console.ReadLine()));

                Console.Write("Enter the img part : ");
                c1.SetImg(int.Parse(Console.ReadLine()));

                Console.WriteLine(c1.print());
            }
            #endregion
        }
    }
}
