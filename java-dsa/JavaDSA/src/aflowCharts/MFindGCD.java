package aflowCharts;

import java.util.Scanner;

/*
Find GCD

You are given two numbers.
 You need to calculate and print their greatest common divisor (GCD).
Draw a flowchart for this process.
Note : You don't need to submit the problem.
 Just attempt in your notebook and ask doubts if you need help.

 */
public class MFindGCD {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		/*
		say we were given 6, 18
		find the smallest of both - try dividing it with other if divided then it is GCD
		else decrease smallNum by 1 and try ... repeat this
		 */
		
		int n1 = s.nextInt();
		int n2 = s.nextInt();
		
		int smallNum = n1>n2? n2: n1;
		
		int gcd = Integer.MIN_VALUE;
		for(int i=smallNum;i>1;i--) {
			if(n1%i==0 && n2%i==0) {
				gcd = i;
				break;
			}
		}
		System.out.println(gcd+" is gcd");
	}
}
