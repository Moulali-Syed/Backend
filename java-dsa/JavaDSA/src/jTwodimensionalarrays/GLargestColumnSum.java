package jTwodimensionalarrays;

public class GLargestColumnSum {

	public static void main(String[] args) {
		int[][] arr = {{2,3,4},{5,6,7},{12,14,16}};//col sum: 19 23 27
		largestColSum(arr);
	}
	
	public static void largestColSum(int[][] arr) {
		int largeSum = 0;
		for(int i=0;i<arr.length;i++) {
			int sum = 0;
		
			for(int j=0;j<arr.length;j++) {
				sum+=arr[j][i];
			}
			if(sum>largeSum) {
				largeSum = sum;
			}
		}
		System.out.println(largeSum);
	}
}
