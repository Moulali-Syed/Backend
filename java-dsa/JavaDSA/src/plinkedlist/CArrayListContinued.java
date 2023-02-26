package plinkedlist;

import java.util.ArrayList;

public class CArrayListContinued {

	public static void main(String[] args) {
		ArrayList<Integer> al = new ArrayList<>();
		
		al.add(10);
		al.add(20);
		al.add(30);
		
		al.add(1,40);
		
		al.set(2, 70);
		
		System.out.println(al.get(2));
		
		System.out.println(al.size());
		
		//remove element from arraylist - specify the index of element 
		System.out.println(al.remove(2));//returns the element that is removed
		
		Integer i = 40;
		//remove with Object , that is the element that should be removed
		System.out.println(al.remove(i));//returns true or false based on elements presence
		
		//print all elements in arraylist
		for(int j=0;j<al.size();j++) {
			System.out.println(al.get(j));
		}
		System.out.println("Enhanced for loop");
		//enhanced for loop
		for(int ele:al) {
			System.out.println(ele);
		}
	}
}
