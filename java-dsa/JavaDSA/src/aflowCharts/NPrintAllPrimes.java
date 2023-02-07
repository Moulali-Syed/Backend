package aflowCharts;

import java.util.Scanner;

/*
All primes

You are given a single positive integer, N. 
You need to print all prime numbers that occur in the range 1 to N (both inclusive).
Draw a flowchart for this process
Note : You don't need to submit the problem.
 Just attempt in your notebook and ask doubts if you need help.
 */
public class NPrintAllPrimes {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		
		for(int i=2;i<=n;i++) {
			boolean isPrime = true;
			for(int j=2;j<i;j++) {
				if(i%j==0) {
					isPrime = false;
					break;
				}
			}
			if(isPrime) {
				System.out.println(i);
			}
		}
	}
}
