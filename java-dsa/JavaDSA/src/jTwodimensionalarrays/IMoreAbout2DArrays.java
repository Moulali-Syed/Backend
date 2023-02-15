package jTwodimensionalarrays;

public class IMoreAbout2DArrays {

	public static void main(String[] args) {
		//Jagged Array
		/*
		 * When number of rows not equal to number of columns then it is called jagged arrays
		 */
		
		int[][] arr = new int[4][];
		//Exception in thread "main" java.lang.NullPointerException:
		//Cannot read the array length because "arr[1]" is null
		System.out.println(arr[1].length);
	}
}
