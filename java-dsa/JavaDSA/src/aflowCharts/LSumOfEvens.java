package aflowCharts;

import java.util.Scanner;

/*
Sum of evens

You are given a single positive integer, N.
 You need to calculate and print the sum of all even numbers which occur 
 in the range 1 to N (both inclusive).
Draw a flowchart for this process
Note : You don't need to submit the problem. Just attempt in your notebook
 and ask doubts if you need help.

 */
public class LSumOfEvens {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int sum = 0;
		for(int i=1;i<=n;i++) {
			if(i%2==0) {
				sum+=i;
			}
		}
		System.out.println(sum);
	}
}
