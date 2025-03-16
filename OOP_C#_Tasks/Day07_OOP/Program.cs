namespace Day07_OOP
{
    internal class Program
    {
        static void Main(string[] args)
        {

            #region Example of SumOfAreas with 2 versions

            Geoshape g1 = new Rect(2, 5);
            Console.WriteLine(g1.Area());

            Rect[] r1 = { new Rect(1, 10), new Rect(2, 20), new Rect(3, 30) };
            Sq1[] sq1 = { new Sq1(1), new Sq1(3), new Sq1(5) };
            CircleInh[] cir1 = { new CircleInh(1), new CircleInh(2), new CircleInh(3) };

            Geoshape[] geoshapes = { r1[0], sq1[0], cir1[0] };

            Console.WriteLine(Utility.SumOfAreasV1(r1, sq1, cir1));

            Console.WriteLine(Utility.SumOfAreasV2(geoshapes));
            #endregion

            #region Try Early vs Late Binding
            #region EarlyBinding
            ParentEB peb_1 = new ParentEB();
            peb_1.Show();

            ParentEB peb_2 = new ChildEB();
            peb_2.Show();

            ParentEB peb_3 = new SubChildEB();
            peb_3.Show();
            #endregion

            #region LateBinding
            ParentLB plb_1 = new ParentLB();
            plb_1.Show();

            ParentLB plb_2 = new ChildLB();
            plb_2.Show();

            ParentLB plb_3 = new SubChildLB();
            plb_3.Show();
            #endregion

            #endregion
        }
    }
}
