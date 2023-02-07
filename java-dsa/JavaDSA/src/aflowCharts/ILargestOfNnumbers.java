package aflowCharts;

import java.util.Scanner;

public class ILargestOfNnumbers {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int maxNum = Integer.MIN_VALUE;
		for(int i=1;i<=n;i++) {
			System.out.println("Enter the number "+i);
			int num = s.nextInt();
			if(num>maxNum) {
				maxNum = num;
			}
		}
		System.out.println(maxNum);
	}
}
