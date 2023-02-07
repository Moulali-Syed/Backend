package bGettingStartedWithJava;

import java.util.Scanner;

public class HTakingInput {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int m = s.nextInt();
		
		System.out.println(n +"  "+ m);
		
		
		s.nextDouble();
		s.nextLong();
		
		s.nextFloat();
		s.nextBoolean();
		
		s.next();//word input
		s.nextLine();//sentence as input
		
		char ch = s.next().charAt(0);//single character input
	}
}
