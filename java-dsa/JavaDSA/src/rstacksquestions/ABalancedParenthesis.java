package rstacksquestions;

import java.util.Stack;

public class ABalancedParenthesis {

	public static boolean isBalanced(String expression) {
		
		//create a stack
		Stack<Character> stack = new Stack<>();
		//traverse thru each character in the string
		
		for(int i=0;i<expression.length();i++) {
			if(expression.charAt(i) == '(') {
				stack.push(expression.charAt(i));
			}else if(expression.charAt(i) == ')') {
				if(stack.isEmpty()) {
					return false;
				}
				char topChar = stack.pop();
				if(expression.charAt(i) == ')' && topChar == '(') {
					continue;
				}else {
					return false;
				}
			}
		}
		
		return stack.isEmpty();
	}
	
	public static void main(String[] args) {
		System.out.println(isBalanced("((esdfg))"));//true
		
		System.out.println(isBalanced("(((sdfdnjnas))"));//false
	}
}
