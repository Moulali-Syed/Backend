package plinkedlist;

import java.util.ArrayList;

/*
 ArrayList
 
 one data structure might not be a good fit at all use cases
 
 
 say we have an event and we want  to store the event registrations at a place
 
 one data structure which we already know that can perform this is array
 
 but we have specify a size if we use array
 
 if our expectation for size of array is high then we have loss of memory 
 
 if registrations are more than our  expected size then it cannot store inside it 
 
 one way we can do is use Dynamic Array 
 
 Something similar to Dynamic array we have inbuilt in java - ArrayList
 
 ArrayList use generics
 */
public class BIntroToArrayList {

	public static void main(String[] args) {
		ArrayList<Integer> al = new ArrayList<>();
		
		//to add elements to arraylist
		al.add(10);
		al.add(20);
		al.add(30);
		
		//add at a particular index
		al.add(1,50);
		
		//size of array list
		System.out.println(al.size());
		
		//to get elements in array - we can use indexing
		System.out.println(al.get(2));
		
		//set a value
		al.set(0, 100);
		
		//ArrayList works similar to dynamic array
		//it will grow or shrink based on demand
		//say it has 10 elements size , once it get filled - it increases to 1.5 times size
		
		//whenever we dont know size - ArrayList is a good option 
		
		//we can create an arrayList by specifying a default capacity
		ArrayList<Integer> al2 = new ArrayList<>(20);//this creates a 20 capacity arraylist
	}
}
