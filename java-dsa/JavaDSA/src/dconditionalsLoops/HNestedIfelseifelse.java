package dconditionalsLoops;

import java.util.Scanner;

public class HNestedIfelseifelse {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int a = s.nextInt();
		int b = s.nextInt();

		if(a>b) {
			System.out.println("a is big");
		}else if(a==b) {
			System.out.println("a, b are equal");
		}else {
			System.out.println("b is big 	");
		}
	}
}
