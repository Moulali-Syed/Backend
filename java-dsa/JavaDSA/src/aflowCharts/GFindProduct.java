package aflowCharts;

import java.util.Scanner;

/*
Find Product

You are given a single non-negative integer, N. You need to calculate and print N factorial (N!)
N factorial is defined as the product of all integers from 1 to N (both inclusive)
Draw a flowchart for this process
Note : You don't need to submit the problem. Just attempt in your notebook and ask doubts if you need help.

 */
public class GFindProduct {

	public static void main(String[] args) {
//		calculate factorial of 5 = 5*4*3*2*1
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int fact = 1;
		for(int i=n;i>=1;i--) {
			fact*=i;
		}
		System.out.println(fact);
	}
}
