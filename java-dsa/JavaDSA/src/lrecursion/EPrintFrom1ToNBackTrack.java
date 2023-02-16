package lrecursion;
/*
BackTracking:
It is calling the task after the recursive function call

 */

import java.util.Scanner;

public class EPrintFrom1ToNBackTrack {

	public static void main(String[] args) {
		
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		print1ToN(n);
	}
	
	public static void print1ToN(int i ) {
		
		
		if(i<1) {
			return;
		}
		print1ToN(i-1);
		System.out.println(i);
	}
}
