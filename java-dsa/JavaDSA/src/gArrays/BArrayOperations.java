package gArrays;

public class BArrayOperations {

	public static void main(String[] args) {
		
		//we can declare as below any ways
		int[] arr1 = new int[10];	//by default values are initialized based on datatype
		int arr[] = new int[5];
		
		arr[0] = 12;
		arr[4] = 10;
		
		System.out.println(arr[0]);
		System.out.println(arr[4]);
		
		System.out.println(arr[3]);
//		Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index -1 out of bounds for length 5
//		System.out.println(arr[-1]);
		
		
		char[] cArray = new char[4];
		double[] dArray = new double[4];
		System.out.println(cArray[0]);//it will be empty null value
		System.out.println(dArray[0]);//0.0
		
		long[] lArr = new long[3];
		System.out.println(lArr[2]);//0
	}
}
