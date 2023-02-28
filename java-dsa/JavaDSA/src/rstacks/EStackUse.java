package rstacks;

public class EStackUse {

	public static void main(String[] args) {
		EStackUsingLinkedList<Integer> stack = new EStackUsingLinkedList<>();
		
		int[] arr = {5,6,7,1,9};
		
		for(int i=0;i<arr.length;i++) {
			stack.push(arr[i]);
		}
		
		while(!stack.isEmpty()) {
			System.out.println(stack.pop());
		}
	}
}
/*
No issue of stack being full

we use generics as well
*/