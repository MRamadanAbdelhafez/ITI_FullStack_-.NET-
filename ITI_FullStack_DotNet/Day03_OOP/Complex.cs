using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task2
{
    class Complex
    {
        private int real;
        private int img;

        public void SetReal(int paramReal)
        {
            real = paramReal;
        }
        public int GetReal()
        {
            return real;
        }
        public void SetImg(int paramImg)
        {
            img = paramImg;
        }
        public int GetImg()
        {
            return img;
        }
        
        public Complex add (Complex part_2)
        {
            Complex result = new Complex();

            result.real = real + part_2.real;
            result.img = img + part_2.img;
            return result;
        }
        public string print()
        {
            if (img == 0)
            {
                return $" the numper is {real}";
            }
            else if (real == 0 && img == 0)
            {
                return "The number is 0";
            }
            else if (img > 0)
            {
                if (real == 0)
                {
                    if (img == 1)
                    {
                        return $" the numper is i";
                    }
                    return $" the numper is {img}i";
                }
                else if (real != 0 && img == 1)
                {
                    return $" the numper is {real}+i";
                }
                return $" the numper is {real}+{img}i";
            }
            else if (img < 0)
            {
                if (real == 0)
                {
                    if (img == -1)
                    {
                        return $" the numper is -i";
                    }
                    return $" the numper is {img}i";
                }
                else if (real != 0 && img == -1)
                {
                    return $" the numper is {real}i";
                }
                return $" the numper is {real}{img}i";
            
            }
            else
            {
                return $" the numper is {real}+{img}i";
            }
        }
    }
}
