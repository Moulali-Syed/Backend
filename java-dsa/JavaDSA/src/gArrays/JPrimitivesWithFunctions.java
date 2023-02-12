package gArrays;

public class JPrimitivesWithFunctions {

	public static void increment(int i) {
		i++;
	}
	public static void incrementArr(int[] arr) {
		int num = 1;
		for(int k=0;k<arr.length;k++) {
			arr[k] = num;
			num++;
		}
	}
	public static void main(String[] args) {
		int i = 10;
		 increment(i);
		System.out.println(i);
		System.out.println("=====================");
		int[] arr = new int[3];
		incrementArr(arr);
		for(int j=0;j<arr.length;j++) {
			System.out.println(arr[j]);
		}
	}
}
//in array only reference is getting copied 
