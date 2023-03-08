package vhashmaps;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Set;

public class CRemoveDuplicatesInArray {

	public static void main(String[] args) {
		int[] arr = {1,2,4,5,6,2,3,1,7,12,43};
		
		HashMap<Integer,Boolean> map = new HashMap<>();
		
		map.put(arr[0], true);
		
		for(int i=1;i<arr.length;i++) {
			int n = arr[i];
			
			boolean res = map.get(arr[i]) == null ? false :true;
			if(!res) {
				map.put(arr[i], true);
			}
		}
		
		Set<Integer> keys =  map.keySet();
		System.out.println(keys);
		
		System.out.println("=======================");
		ArrayList<Integer> al = removeDuplicates(arr);
		for(int i=0;i<al.size();i++) {
			System.out.println(al.get(i));
		}
	}
	
	public static ArrayList<Integer> removeDuplicates(int[] arr){
		ArrayList<Integer> al = new ArrayList<>();
		HashMap<Integer,Boolean> hmap = new HashMap<>();
		
		for(int i=0;i<arr.length;i++) {
			if(hmap.containsKey(arr[i])) {
				continue;
			}else {
				al.add(arr[i]);
				hmap.put(arr[i], true);
			}
		}
		return al;
	}
}
