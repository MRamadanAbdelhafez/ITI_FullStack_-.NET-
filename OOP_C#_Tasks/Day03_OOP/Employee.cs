using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task2
{
    class Employee
    {
       private int id;
       private string name;
       private int salary;
       private int age;

        public void SetId(int paramId)
        {
            id = paramId;
        }
        public int GetId ()
        {
            return id;
        }

        public void SetName(string paramName)
        {
            name = paramName;
        }
        public string GetName()
        {
            return name;
        }

        public void SetSalary(int paramSalary)
        {
            salary = paramSalary;
        }
        public int GetSalary()
        {
            return salary;
        }
        public void SetAge(int paramAge)
        {
            age = paramAge;
        }
        public int GetAge()
        {
            return age;
        }
        public string print()
        {
            return $" Id: {id} , Name: {name} , Salary: {salary} , Age: {age}";
        }
    }
}
