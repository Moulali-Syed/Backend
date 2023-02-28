package rstacks;

import java.util.Stack;

public class FStackInCollections {

	public static void main(String[] args) {
		//in collections framework we have stack implemented for us
		
		Stack<Integer> stack = new Stack<>();
		
		stack.push(10);
		System.out.println(stack.size());
		
		System.out.println(stack.isEmpty());
		
		System.out.println(stack.peek());//element at top
		
		System.out.println(stack.pop());
		
		int[] arr = {5,6,7,1,9};
		
		for(int ele: arr) {
			stack.push(ele);
		}
		
		while(!stack.isEmpty()) {
			System.out.println(stack.pop());
		}
	}
}
