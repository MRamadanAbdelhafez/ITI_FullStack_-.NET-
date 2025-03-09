namespace Day02_OOP
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region solutionof1#array of 10 intergers and get min and max value
            int sizeOfArr_1;
            int max = -1;
            int min = 999;
            Console.WriteLine("inter your size of arr1");
            sizeOfArr_1 = int.Parse(Console.ReadLine());
            int[] arr1 = new int[sizeOfArr_1];

            for (int i = 0; i < arr1.Length; i++)
            {
                Console.WriteLine($"Enter # at index {i}");
                arr1[i] = int.Parse(Console.ReadLine());
                if (max < arr1[i])
                {
                    max = arr1[i];
                }
                if (min > arr1[i])
                {
                    min = arr1[i];
                }
            }
            for (int i = 0; i < arr1.Length; i++)
            {
                Console.WriteLine($"# at index {i} is {arr1[i]}");
            }
            Console.WriteLine($"the max of arr = {max}");
            Console.WriteLine($"the min of arr = {min}");
            #endregion
            #region solutionof2#array of 10 integers and sort it ascending without any built in function
            int sizeOfArr_2;
            Console.WriteLine("inter your size of arr2");
            sizeOfArr_2 = int.Parse(Console.ReadLine());
            int[] arr2 = new int[sizeOfArr_2];

            for (int i = 0; i < arr2.Length; i++)
            {
                Console.WriteLine($"Enter # at index {i}");
                arr2[i] = int.Parse(Console.ReadLine());

            }
            for (int i = 0; i < arr2.Length; i++)
            {

                for (int j = i + 1; j < arr2.Length; j++)
                    if (arr2[j] < arr2[i])
                    {
                        int temp = arr2[i];
                        arr2[i] = arr2[j];
                        arr2[j] = temp;
                    }

            }
            for (int i = 0; i < arr2.Length; i++)
            {
                Console.WriteLine($"# at index {i} is {arr2[i]}");
            }
            #endregion
            #region solutionof3# array of 10 integers and search number and get index
            int sizeOfArr_3, num, sultion;
            sultion = -1;
            Console.WriteLine("inter your size of arr_3");
            sizeOfArr_3 = int.Parse(Console.ReadLine());

            int[] arr_3 = new int[sizeOfArr_3];

            for (int i = 0; i < arr_3.Length; i++)
            {
                Console.WriteLine($"Enter # at index {i}");
                arr_3[i] = int.Parse(Console.ReadLine());

            }
            Console.WriteLine("inter your number to search");
            num = int.Parse(Console.ReadLine());
            for (int i = 0; i < arr_3.Length; i++)
            {
                if (arr_3[i] == num)
                {
                    sultion = i;
                }

            }
            if (sultion == -1)
            {
                Console.WriteLine("not found");
            }
            else
            {
                Console.WriteLine($"found at index {sultion}");
            }
            #endregion
            #region solutionof4#array of 3 rows,4 cols read and write_add get Sum of rows
            int sizeOfRow, sizeOfCol;
            Console.WriteLine("inter your size of sizeOfRow");
            sizeOfRow = int.Parse(Console.ReadLine());

            Console.WriteLine("inter your size of sizeOfCol");
            sizeOfCol = int.Parse(Console.ReadLine());

            int[,] arr4 = new int[sizeOfRow, sizeOfCol];

            int[] sum = new int[sizeOfRow];
            for (int i = 0; i < arr4.GetLength(0); i++)
            {
                for (int j = 0; j < arr4.GetLength(1); j++)
                {
                    Console.WriteLine($"Enter num at index {i},{j}");
                    arr4[i, j] = int.Parse(Console.ReadLine());
                }
            }
            for (int i = 0; i < arr4.GetLength(0); i++)
            {
                for (int j = 0; j < arr4.GetLength(1); j++)
                {
                    sum[i] += arr4[i, j];
                    Console.Write($"{arr4[i, j]} \t ");

                }
                Console.WriteLine($"the sum of this row is {sum[i]}");
                Console.WriteLine();
            }

            #endregion
            #region  calculate  birth date
            int day, month, year;
            int currentDay = DateTime.Now.Day;
            int currentMonth = DateTime.Now.Month;
            int currentYear = DateTime.Now.Year;

            do
            {
                Console.Write("Enter your birth year (1980 - 2023): ");
                year = int.Parse(Console.ReadLine());
            } while (year < 1980 || year > 2023);

            do
            {
                Console.Write("Enter your birth month (1 - 12): ");
                month = int.Parse(Console.ReadLine());
            } while (month < 1 || month > 12);

            int maxDays;
            if (month == 2)
            {
                maxDays = (year % 4 == 0) ? 29 : 28;
            }
            else if (month == 4 || month == 6 || month == 9 || month == 11)
            {
                maxDays = 30;
            }
            else
            {
                maxDays = 31;
            }

            do
            {
                Console.Write($"Enter your birth day (1 - {maxDays}): ");
                day = int.Parse(Console.ReadLine());
            } while (day < 1 || day > maxDays);

            int ageYears = currentYear - year;
            int ageMonths = currentMonth - month;
            int ageDays = currentDay - day;

            if (ageDays < 0)
            {
                ageMonths--;
                ageDays += maxDays;
            }
            if (ageMonths < 0)
            {
                ageYears--;
                ageMonths += 12;
            }

            Console.WriteLine($"You are {ageYears} years, {ageMonths} months, and {ageDays} days old.");

            #endregion
            #region calculator
            int num1, num2;
            int? result = null;
            char _operator;
            Console.WriteLine("inter your num1");
            num1 = int.Parse(Console.ReadLine());
            Console.WriteLine("inter your num2");
            num2 = int.Parse(Console.ReadLine());
            Console.WriteLine("inter your operator");
            _operator = char.Parse(Console.ReadLine());

            switch (_operator)
            {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '%':
                    result = num1 % num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    Console.WriteLine("Invalid Operator !!!!");
                    break;
            }
            if (result != null)
            {
                Console.WriteLine($"the result is {result}");
            }
            #endregion
        }
    }
}
