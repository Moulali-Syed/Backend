package plinkedlist;

import java.util.ArrayList;

public class ZPractice {

	public static void main(String[] args) {
		int[] arr = {10,10,20,20,20,30,30,40,40,40,10};
		
		ArrayList<Integer> al = findUnique(arr);
		
		for(int i=0;i<al.size();i++) {
			System.out.print(al.get(i)+" ");
		}
	}
	
	public static ArrayList<Integer> findUnique(int[] arr){
		
		ArrayList<Integer> al = new ArrayList<>();
		
		al.add(arr[0]);
		
		for(int i=1;i<arr.length;i++) {
			if(arr[i]==arr[i-1]) {
				continue;
			}else {
				al.add(arr[i]);
			}
		}
		return al;
	}
}
