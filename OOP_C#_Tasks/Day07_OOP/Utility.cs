using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day07_OOP
{
    class Utility
    {
        public static double SumOfAreasV1(Rect[] _rect, Sq1[] _sq1, CircleInh[] _cir )
        {
            double result = 0d;
            for (int i = 0; i < _rect.Length; i++)
            {
                result += _rect[i].Area();
            }
            for (int i = 0; i < _sq1.Length; i++)
            {
                result += _sq1[i].Area();
            }
            for (int i = 0; i < _cir.Length; i++)
            {
                result += _cir[i].Area();
            }

            return result;
        }
        public static double SumOfAreasV2(Geoshape[] arr )
        {
            double result = 0d;
            for (int i = 0; i < arr.Length; i++)
            {
                result += arr[i].Area();
            }
            return result;
        }
    }
}
