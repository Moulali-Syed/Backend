package jTwodimensionalarrays;
/*
we can simply get elements in 2d array as arrName[row][column]

int[][] arr2d = new int[3][4];

 */
public class AIntroTo2DArrays {

	public static void main(String[] args) {
		
		//2d array declaration	
		int[][] arr2d = new int[3][4];
		
		//number of elements in 2d arrays
		System.out.println(3*4);
		
		//access an element at 4th row and 4th column in 5x5 array
		arr2d = new int[5][5];
		System.out.println(arr2d[4][4]);
	}
}
