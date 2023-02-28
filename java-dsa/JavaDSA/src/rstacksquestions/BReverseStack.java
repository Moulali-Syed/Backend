package rstacksquestions;

import java.util.Stack;

public class BReverseStack {

	public static void reverseStack(Stack<Integer> s1, Stack<Integer> helper) {
		// use recursion to solve this because we need to reverse our original
		//stack , not empty stack
		while(!s1.isEmpty()) {
			int e = s1.pop();
			helper.push(e);
		}
	}
	
	public static void main(String[] args) {
		Stack<Integer> s1 = new Stack<>();
		Stack<Integer> helper = new Stack<>();
		
		int[] arr = {3,6,9,1,4,2};
		for(int ele: arr) {
			s1.push(ele);
		}
		
//		while(!s1.isEmpty()) {
//			System.out.println(s1.pop());
//		}
		
		reverseStack(s1,helper);
		
		while(!helper.isEmpty()) {
			System.out.print(helper.pop()+"    ");
		}
	}
}
