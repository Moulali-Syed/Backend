package gArrays;

public class KPrintAllPairs {

	public static void main(String[] args) {
		int[] arr  = {1,5,2,9,5,2};
		printPairs(arr);
	}
	
	public static void printPairs(int[] arr) {
		for(int i=0;i<arr.length;i++) {
			for(int j=i+1;j<arr.length;j++) {
				System.out.print("("+arr[i]+","+arr[j]+")"+"  ");
			}
		}
	}
}
