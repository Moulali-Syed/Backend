package dconditionalsLoops;

import java.util.Scanner;

public class FConditionalsAndOperators {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n  = s.nextInt();
		int m = s.nextInt();
		
		if(n>0 && m>0) {
			System.out.println("Both are positive");
		}else {
			System.out.println("Both are not positive");
		}
			
		if(n>0 || m>0) {
			System.out.println("either is positive");
		}else {
			System.out.println("none is positive");
		}
		
		if(n==m) {
			System.out.println("equal");
		}else {
			System.out.println("Not equal");
		}
		
		if(n!=m) {
			System.out.println("not equal");
		}else {
			System.out.println("equal");
		}
	}
}
