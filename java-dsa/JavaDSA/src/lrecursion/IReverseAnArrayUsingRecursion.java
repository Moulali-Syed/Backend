package lrecursion;

public class IReverseAnArrayUsingRecursion {

	public static void main(String[] args) {
		int[] arr = {1,4,6,9,3,2,5,3,2,51,4,32,17,11};
//		reverseArray(arr,0,arr.length-1);
		reverseArray2(arr,0);
		for(int i=0;i<arr.length;i++) {
			System.out.print(arr[i]+"  ");
		}
	}
	
	public static void reverseArray(int[] arr,int stInd,int endInd) {
		
		if(stInd>=endInd) {
			return;
		}
		
		int temp = arr[stInd];
		arr[stInd] = arr[endInd];
		arr[endInd] = temp;

		reverseArray(arr,++stInd,--endInd);
				
	}
	
	public static void reverseArray2(int[] arr,int stInd) {
		
		if(stInd>=arr.length/2) {
			return;
		}
		
		int temp = arr[stInd];
		arr[stInd] = arr[arr.length-1-stInd];
		arr[arr.length-1-stInd] = temp;

		reverseArray2(arr,++stInd);
				
	}
}
