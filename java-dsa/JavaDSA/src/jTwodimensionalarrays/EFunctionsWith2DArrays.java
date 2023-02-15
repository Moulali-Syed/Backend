package jTwodimensionalarrays;

import java.util.Scanner;

public class EFunctionsWith2DArrays {

	public static void main(String[] args) {
		int[][] arr  = takeInput2d();
		print2dArray(arr);
	}
	
	public static int[][] takeInput2d(){
		Scanner s = new Scanner(System.in);
		System.out.println("Enter number of rows");
		int rows = s.nextInt();
		System.out.println("Enter number of cols");
		int cols = s.nextInt();
		
		int[][] arr2d = new int[rows][cols];
		
		for(int i=0;i<rows;i++) {
			for(int j=0;j<cols;j++) {
				arr2d[i][j] = s.nextInt();
			}
		}
		
		return arr2d;
	}
	
	public static void print2dArray(int[][] arr) {
		for(int i=0;i<arr.length;i++) {
			for(int j=0;j<arr[i].length;j++) {
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
		}
	}
}
