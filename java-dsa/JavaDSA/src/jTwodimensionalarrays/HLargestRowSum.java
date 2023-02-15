package jTwodimensionalarrays;

public class HLargestRowSum {

	public static void main(String[] args) {
		int[][] arr2d = {{11,12,13},{9,8,7},{17,13,11}};
		
		largestrowSum(arr2d);
	}
	
	public static void largestrowSum(int[][] arr) {
		int largestRowSum = 0;
		for(int i=0;i<arr.length;i++) {
			int sum = 0;
			for(int j=0;j<arr[i].length;j++) {
				sum+=arr[i][j];
			}
			if(sum>largestRowSum) {
				largestRowSum = sum;
			}
		}
		
		System.out.println(largestRowSum);
	}
}
