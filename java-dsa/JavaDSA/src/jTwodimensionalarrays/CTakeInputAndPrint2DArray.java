package jTwodimensionalarrays;

import java.util.Scanner;

public class CTakeInputAndPrint2DArray {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.println("Enter number of rows");
		int rows = s.nextInt();
		System.out.println("Enter number of columns");
		int cols = s.nextInt();
		int[][] arr2d = takeInput2DArray(rows,cols,s);
		
		print2dArray(arr2d);
		
	}
	
	public static void print2dArray(int[][] arr2d) {

		for(int i=0;i<arr2d.length;i++) {
			for(int j=0;j<arr2d[i].length;j++) {
				System.out.print(arr2d[i][j]+" ");
			}
			System.out.println();
		}
	}

	public static int[][] takeInput2DArray(int rows,int cols,Scanner s) {
		int[][] arr2d = new int[rows][cols];
		
		for(int i=0;i<rows;i++) {
			for(int j=0;j<cols;j++) {
				System.out.println("Enter the element at "+i+"th row and "+j+"th column");
				arr2d[i][j] = s.nextInt();
			}
		}
		return arr2d;
	}
}
