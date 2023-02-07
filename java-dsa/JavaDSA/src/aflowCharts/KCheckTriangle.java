package aflowCharts;

import java.util.Scanner;

/*
Check triangle

You are given the lengths of 3 sides of a valid triangle.
 You need to print any one of the following outputs depending on the triangle's nature.
Print 1, if the triangle is equilateral
Print 0, if it's isosceles
Print -1, if it's scalene
Draw a flowchart for this process.
Note : You don't need to submit the problem. 
Just attempt in your notebook and ask doubts if you need help.
 */
public class KCheckTriangle {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		
		int a = s.nextInt();
		int b = s.nextInt();
		int c = s.nextInt();
		
		if(a==b && b==c && a==c) {
			System.out.println("Eqilateral");
		}else if(a==b || b==c || a==c) {
			System.out.println("Isosceles");
		}else {
			System.out.println("Scalene");
		}
	}
}
