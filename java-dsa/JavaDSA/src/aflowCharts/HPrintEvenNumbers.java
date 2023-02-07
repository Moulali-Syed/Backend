package aflowCharts;

import java.util.Scanner;

/*
Print Even Numbers

You are given a single positive integer, N.
 You need to print all even integers that occur between 1 and N (both inclusive).
Draw a flowchart for this process
Note : You don't need to submit the problem. 
Just attempt in your notebook and ask doubts if you need help.
 */
public class HPrintEvenNumbers {

	public static void main(String[] args) {
		Scanner s  = new Scanner(System.in);
		int n = s.nextInt();
		
		for(int i=n;i>=2;i--) {
			if(i%2==0) {
				System.out.println(i);
			}
		}
	}
}
