package rstacks;

//stack implementation using array
public class DDoubleStackCapacity {

	int data[];
	int topIndex = -1;
	
	
	DDoubleStackCapacity(){
		data = new int[10];
		topIndex = -1;
	}
	
	DDoubleStackCapacity(int size){
		data = new int[size];
		topIndex = -1;
	}
	
	//push
	public void push(int ele) {
		if(topIndex == data.length-1) {
			doubleCapacity();
		}
	}

	private void doubleCapacity() {
		int[] temp = data;
		data = new int[temp.length*2];
		
		for(int i=0;i<temp.length;i++) {
			data[i] = temp[i];
		}
	}
	
	//pop
	public int pop() {
		if(topIndex == -1) {
			System.out.println("Stack is empty");
		}
		
		int temp = data[topIndex];
		topIndex--;
		return temp;
	}
	
	//size
	public int size() {
		return topIndex+1;
	}
	
	//top
	public int top() {
		if(topIndex == -1) {
			System.out.println("Stack is empty");
		}
		return data[topIndex];
	}
	//isEmpty
	public boolean isEmpty() {
		if(topIndex == -1) {
			return false;
		}
		return true;
		
		//short form
//		return topIndex == -1;
	}
}
