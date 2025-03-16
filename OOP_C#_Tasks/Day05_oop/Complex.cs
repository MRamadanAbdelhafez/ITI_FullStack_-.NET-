using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day05_OOP
{
    class Complex
    {
        #region Data type
        private int real;
        private int img; 
        #endregion
        #region Property
        public int Real
        {
            set
            {
                this.real = value;
            }
            get 
            {
                return real;
            }
        }
        public int Img
        {
            set
            {
                this.img = value;
            }
            get
            {
                return img;
            }
        }
        #endregion
        #region ctor
        public Complex()
        {
            real = 1;
            Img = 1;
        }
        public Complex(int _real)
        {
            this.real = _real;
            img = 0;
        }
        public Complex(int _real, int _img)
        {
            this.real = _real;
            this.img = _img;
        } 
        #endregion
        #region geter and seter
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

        #endregion
        #region F of Add
        public Complex add(Complex part_2)
        {
            Complex result = new Complex();

            result.real = real + part_2.real;
            result.img = img + part_2.img;
            return result;
        }
        #endregion
        #region F of print
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
        #endregion
        #region Overloading fun (Operators)
        public static Complex operator +(Complex left,Complex right)
        {
            return new Complex { real = left.real + right.real, Img = left.img + right.img };
        }
        public static Complex operator -(Complex left, Complex right)
        {
            return new Complex { real = left.real - right.real, Img = left.img - right.img };
        }


        public static Complex operator +(Complex left, int num)
        {
            return new Complex { real = left.real + num, Img = left.img + num };
        }
        public static Complex operator -(Complex left, int num)
        {
            return new Complex { real = left.real - num, Img = left.img - num };
        }

        public static Complex operator +( int num, Complex right)
        {
            return new Complex { real = right.real + num, Img = right.img + num };
        }
        public static Complex operator -(int num, Complex right)
        {
            return new Complex { real = right.real - num, Img = right.img - num };
        }

        public static Complex operator ++(Complex opj)
        {
            return new Complex { real = opj.real + 1, Img = opj.img + 1 };
        }
        public static Complex operator --(Complex opj)
        {
            return new Complex { real = opj.real - 1, Img = opj.img - 1 };
        }

        public static bool operator <(Complex left, Complex right)
        {
            return    left.real < right.real &&  left.img < right.img ;
        }
        public static bool operator >(Complex left, Complex right)
        {
            return left.real > right.real && left.img > right.img;
        }

        public static bool operator ==(Complex left, Complex right)
        {
            return left.real == right.real && left.img == right.img;
        }
        public static bool operator !=(Complex left, Complex right)
        {
            return !(left.real == right.real && left.img == right.img);
        }

        public static implicit operator int (Complex opj)
        {
            int result = opj.Real;
            return result;

        }
        

        #endregion
    }
}
