package dconditionalsLoops;

/*
Relational and Logical Operators:

>, < , >=, <= , != 

logical operators:
AND(&&) , OR(||) , NOT(!)

T && T - T , rest all false

F||F - F , rest all true


!T - F
!F - T
 */

public class ARelationalAndLogicalOperators {

	public static void main(String[] args) {
		int a = 10, b= 20;
		System.out.println("Relational operators");
		System.out.println(a>b);//false
		System.out.println(a<b);
		System.out.println(a==b);
		System.out.println(a!=b);
		System.out.println(a>=b);
		System.out.println(a<=b);
		System.out.println("logical operators");
		System.out.println(true&& false);
		System.out.println(true&&true);
		System.out.println(true||false);
		System.out.println(false||false);
		System.out.println(!true);
	}
}
