package lrecursion;

import java.util.Scanner;

public class FPrintFromNTo1BackTrack {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		printNTo1backtrack(1,n);
	}
	
	public static void printNTo1backtrack(int i,int n) {
		
		if(i>n) {
			return;
		}
		printNTo1backtrack(i+1,n);
		System.out.println(i);
	}
}
