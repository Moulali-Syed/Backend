package vhashmaps;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

/*
 we have HashMap , TreeMap by default in java
 
 TreeMap - is made by using BST , most of operations are of (logn)
 			treemap will only be used when i want to store in order
 
 HashMap - is made using HashTable , most of operations are of O(1)
 
 */
public class BInbuiltMap {

	public static void main(String[] args) {
		HashMap<String , Integer> hmap = new HashMap<>();
		
		//insert
		hmap.put("abc", 2);
		hmap.put("def", 1);
		
		//size
		System.out.println(hmap.size());
		
		//check if map contains a value or not
		if(hmap.containsKey("abc")) {
			System.out.println("has abc");
		}
		
		if(hmap.containsKey("def")) {
			System.out.println("has def");
		}
			
		//containsValue is of O(n) , rest all are O(1)
		if(hmap.containsValue(1)) {
			System.out.println("has 1");
		}
		
		//get value corresponding to key
		int v = hmap.get("abc");
		System.out.println(v);//gives its corresponding value
		
		//int v2 = hmap.get("asd");//Exception in thread "main" java.lang.NullPointerException:
//		System.out.println(v2);
		
		//remove - gives the deleted value
		int d = hmap.remove("abc");
		System.out.println(d);
		
		//iterate on keys
		Set<String> keys = hmap.keySet();
		for(String k:keys) {
			System.out.println(k);
		}
		//order will not be maintained
		
		Collection<Integer> vals = hmap.values();
		for(int n:vals) {
			System.out.println(n);
		}
	}
}
