package aflowCharts;

import java.util.Scanner;

/*
mostly we have to decide based on a condition
in flow chart as well we need to take decision 
this is rhombus shaped box


given a number find even or odd?

Start
read  a number
if number %2 ==0 
print even
else 
print odd
End

example2:
Find largest of three numbers:

Start
read a, b , c
check a>b and a>c - print a is big
check b>a and b>c - print b is big
 */
public class CDecisionMaking {

	public static void main(String[] args) {
		/*
		Scanner s = new Scanner(System.in);
		System.out.println("Enter a number");
		int num = s.nextInt();
		
		if(num%2==0) {
			System.out.println("even");
		}else {
			System.out.println("odd");
		}
		*/
		checkBig();
	}
	
	public static void checkBig() {
		Scanner s = new Scanner(System.in);
		int a = s.nextInt();
		int b = s.nextInt();
		int c = s.nextInt();
		
		if(a>=b && a>=c) {
			System.out.println("a is big");
		}else if(b>=a && b>=c) {
			System.out.println("b is big");
		}else {
			System.out.println("c is big");
		}
	}
}
