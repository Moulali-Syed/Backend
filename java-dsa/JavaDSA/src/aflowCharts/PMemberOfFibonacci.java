package aflowCharts;

import java.util.Scanner;

/*
Member of Fibonacci

You are given a single non-negative integer, N.
 You need to find out whether N is a part of the fibonacci sequence.
Print "Yes" if it is and "No" if it's not.
Draw a flowchart for this process
Note 1: The first two terms of the fibonacci sequence are 0 and 1.
Note 2: You don't need to submit the problem.
 Just attempt in your notebook and ask doubts if you need help.

 */
public class PMemberOfFibonacci {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		
		int fibNum = s.nextInt();
		
		int a = 0,b=1;
		for(int i=2;i<fibNum;i++) {
			int c = a+b;
			a = b;
			b = c;
			
			if(c==fibNum) {
				System.out.println("Yes");
				break;
			}else if(c>fibNum) {
				System.out.println("No");
				break;
			}
		}
	}
}
