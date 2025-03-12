namespace Day06_OOP
{
    internal class Program
    {
        static void Main(string[] args)
        {
            #region Association and Composition Example
            Point p1 = new Point(1, 2);
            Point p2 = new Point();
            Point p3 = new Point(9, 6);
            Line l1 = new Line();
            Line l2 = new Line(1, 2, 3, 4);
            Circle c1 = new Circle();
            Circle c2 = new Circle(1, 2, 3);
            Rectangle r1 = new Rectangle();
            Rectangle r2 = new Rectangle(p1, p2);
            Triangle t1 = new Triangle();
            Triangle t2 = new Triangle(p1, p2, p3);
            #endregion

            #region Inheritance Example
            Rect rc1 = new Rect(1.5, 2.25);
            Console.WriteLine(rc1.Area());

            sq1 sq1_1 = new sq1(1.1);
            Console.WriteLine(  sq1_1.Area());

            sq2 sq2_1 = new sq2(1.2,1.3);
            Console.WriteLine(sq2_1.Area());

            CircleInh cir1 = new CircleInh(0.6);
            Console.WriteLine(cir1.Area());

            tri tr1 = new tri(5, 9);
            Console.WriteLine(tr1.Area());
            #endregion
        }
    }
}
