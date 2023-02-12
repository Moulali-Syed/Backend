package gArrays;

import java.util.Scanner;

public class CTakingInputAndPrinting {

	public static void main(String[] args) {
		
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		
		int[] arr = new int[n];
		
		for(int i=0;i<n;i++) {
			System.out.println("Enter the element at "+i+" index position ");
			arr[i] = s.nextInt();
		}
		
		System.out.println("Printing array elements");
		for(int i=0;i<n;i++) {
			System.out.println("Element at index position "+i+" is " +arr[i]);
		}
	}
}
