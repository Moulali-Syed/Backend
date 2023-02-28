package rstacks;

public class CStackUse {

	public static void main(String[] args) throws CStackFullException, StackEmptyException {
		//say some one wants to create a stack
		
		//we can create using our StackusingArray class
		
		CStackusingArray stack = new CStackusingArray();
		
		//the operations we want to perform on a stack
		//are push , pop , check size, check the top element , check if it is empty
		
		stack.push(10);
		System.out.println(stack.top());
		System.out.println(stack.size());
		System.out.println(stack.pop());
		System.out.println(stack.isEmpty());
		
		int[] arr = {5,6,7,1,9};
		
		for(int i=0;i<arr.length;i++) {
			stack.push(arr[i]);
		}
		
		while(!stack.isEmpty()) {
			System.out.print(stack.pop()+" ");
		}
	}
}
