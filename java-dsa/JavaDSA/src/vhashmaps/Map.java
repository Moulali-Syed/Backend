package vhashmaps;

import java.util.ArrayList;

public class Map<K,V> {

	
	//1st we need bucket array , at each index position we have linked list
	//ideally i want to take an array , but problem we cannot make generic array
	//so we use ArrayList , of generic type , we store node in it
	
	ArrayList<MapNode<K,V>> buckets;
	int size;
	int numBuckets;
	
	
	public Map() {
		numBuckets = 20;
		buckets = new ArrayList<>();
		for(int i=0;i<numBuckets;i++) {
			buckets.add(null);
		}
	}
	
	private int getBucketIndex(K key) {
		int hashcode = key.hashCode();
		
		return hashcode%numBuckets;
	}
	public void insert(K key,V value) {
		int bucketIndex = getBucketIndex(key);
		
		//traverse thru linked list and update - 12minutes
	}
}
