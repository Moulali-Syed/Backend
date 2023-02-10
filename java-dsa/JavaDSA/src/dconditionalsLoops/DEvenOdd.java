package dconditionalsLoops;

import java.util.Scanner;

public class DEvenOdd {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		
		if(n%2==0) {
			System.out.println("entered number is even");
		}else {
			System.out.println("entered number is odd");
		}
		
		System.out.println("outside if else");
	}
}
