package lrecursion;

import java.util.Scanner;

public class GSumOfNnumbersUsingRecursion {

	public static void main(String[] args) {
		
//		Scanner s = new Scanner(System.in);
//		
//		int n = s.nextInt();
		
		sum(1,10,0);
		
		System.out.println("Functional way "+functional(10));
	}
	
	public static void sum(int i,int n,int sum) {
		
		if(i>n) {
			System.out.println(sum);
			return;
		}
//		sum+=i;
		
		sum(i+1,n,sum+i);
		
	}
	
	public static int functional(int n) {
		if(n==0) {
			return 0;
		}
		return n+functional(n-1);
	}
}
