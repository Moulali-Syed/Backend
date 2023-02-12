package gArrays;

import java.util.Scanner;

public class FFindLargestElementInArray {

	public static void main(String[] args) {
		int[] arr = takeInput();
		System.out.println(findLargeEleFromArr(arr));
	}
	
	public static int findLargeEleFromArr(int[] arr) {
		int largeEle = arr[0];
		for(int i=1;i<arr.length;i++) {
			if(arr[i]>largeEle) {
				largeEle = arr[i];
			}
		}
		return largeEle;
	}
	
	public static int[] takeInput() {
		Scanner s  = new Scanner(System.in);
		int n = s.nextInt();
		
		int[]  arr = new int[n];
		for(int i=0;i<n;i++) {
			arr[i] = s.nextInt();
		}
		return arr;
	}
}
