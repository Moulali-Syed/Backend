package rstacks;

public class CStackusingArray {

	//to store data in a stack we decided to use array
	private int data[];
	private int topIndex;//index of top most element of stack
	
	//we will assume the size of array is 10 and specify it in constructor
	public CStackusingArray() {
		data = new int[10];
		topIndex = -1;//initialized to -1 because at start my stack is empty
	}
	
	public CStackusingArray(int size) {
		data = new int[size];
		topIndex = -1;//initialized to -1 because at start my stack is empty
	}
	
	public void push(int elem) throws CStackFullException {
		
//		if stack is full 
		if(topIndex == data.length - 1) {
			//throw exception
			throw new CStackFullException();
		}
		topIndex++;
		data[topIndex] = elem;
	}
	
	public int size() {
		return topIndex+1;
	}
	
	public int top() throws StackEmptyException {
		if(topIndex == -1) {
			throw new StackEmptyException();
		}
		return data[topIndex];
	}
	
	public int pop() throws StackEmptyException {
		if(topIndex == -1) {
			throw new StackEmptyException();
		}
		
		int temp = data[topIndex];
		topIndex--;
		return temp;
	}
	
	public boolean isEmpty() {
		if(topIndex == -1) {
			return true;
		}
		return false;
		
		//shorter version
//		return topIndex == -1;
	}
}

/*
the stack we have built using an array are of time complexity O(1)

it is very efficient 
*/