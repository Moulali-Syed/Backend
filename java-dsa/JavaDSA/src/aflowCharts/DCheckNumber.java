package aflowCharts;

import java.util.Scanner;

/*
Check Number

You are given a single number. You need to print one of the following outputs according to the number's nature.
Print 1, if the number is positive
Print -1, if it's negative
Print 0, if it's equal to 0
Draw a flowchart for this process.
Note : You don't need to submit the problem. Just attempt in your notebook and ask doubts if you need help.


 */
public class DCheckNumber {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		if(n>0) {
			System.out.println(1);
		}else if(n<0) {
			System.out.println(-1);
		}else {
			System.out.println(0);
		}
	}
}
