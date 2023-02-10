package dconditionalsLoops;

import java.util.Scanner;

public class KSumOfNNumbers {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n  = s.nextInt();
		int sum = 0;
		int i = 1;
		while(i<=n) {
			sum+= i;
			i++;
		}
		
		System.out.println(sum);
	}
}
