package aflowCharts;

import java.util.Scanner;

/*
Valid Triangle

You are given 3 numbers. Each number represents the length of a line.
You need to figure out whether these lines can form a valid triangle.
If a valid triangle can be formed, print "Yes", otherwise print "No".
Draw a flowchart for this process
Note : You don't need to submit the problem. Just attempt in your notebook and ask doubts if you need help.

 */
public class EValidTriangle {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int a = s.nextInt();
		int b = s.nextInt();
		int c = s.nextInt();
		
		if(a+b>c && b+c>a&& a+c>b) {
			System.out.println("triangle can be formed");
		}else {
			System.out.println("triangle cannot be formed");
		}
	}
}
