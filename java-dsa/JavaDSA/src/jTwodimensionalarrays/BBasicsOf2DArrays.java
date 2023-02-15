package jTwodimensionalarrays;

public class BBasicsOf2DArrays {

	public static void main(String[] args) {
		int[][] arr2d = new int[3][4];
		System.out.println(arr2d[0][0]);
		
		arr2d[2][3] = 14;
		System.out.println(arr2d[2][3]);
		
		//if index not in range - we get indexoutofBounds Exception
	}
}
