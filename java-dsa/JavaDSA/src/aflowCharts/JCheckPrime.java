package aflowCharts;

import java.util.Scanner;

/*
Check Prime

Draw a flowchart to take a number N from user. And check if that number is prime or not.
Print "Yes" if number is prime, otherwise print "No".
Assume N >= 2.
Note : You don't need to submit the problem.
 Just attempt in your notebook and ask doubts if you need help.

 */
public class JCheckPrime {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		boolean isPrime = true;
		for(int i=2;i<n;i++) {
			if(n%i == 0) {
				isPrime = false;
				break;
			}
		}
		String res = isPrime ? "Yes":"No";
		System.out.println(res);
	}
}
