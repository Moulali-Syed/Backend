package rstacks;

class Node1<T>{
	T data;
	Node1<T> next;
	
	
	Node1(T data){
		this.data = data;
	}
	
}
public class ZDemo<T> {

	//stack implementation using LinkedList
	
	private Node1<T> head;
	private int size;
	
	//for knowing we can write
	ZDemo(){
		head = null;
		size = 0;
	}
	
	public void push(T ele) {
		Node1<T> newNode = new Node1<>(ele);
		if(head == null) {
			head = newNode;
			size++;
		}else {
			newNode.next = head;
			head = newNode;
			size++;
		}
	}
	
	public T pop() {
		T e = head.data;
		head = head.next;
		size--;
		return e;
	}
	
	public int size() {
		return size;
	}
	
	public T top() {
		return head.data;
	}
	
	public boolean isEmpty() {
		return size == 0;
	}
}

/*

//stack implementation using array
	
	int[] data;
	int topIndex;
	
	ZDemo(){
		data = new int[10];
		topIndex = -1;
	}
	
	
	//push
	public void push(int elem) {
		if(topIndex == data.length-1) {
			System.out.println("Stack Full Exception");
		}
		topIndex++;
		data[topIndex] = elem;
	}
	
	//pop
	public int pop() {
		if(topIndex == -1) {
			System.out.println("Stack EMpty exception");
			
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
			System.out.println("Stack empty Exception");
		}
		return data[topIndex];
	}
	
	//isEmpty
	public boolean isEmpty() {
		if(topIndex == -1) {
			return true;
		}
		return false;
		
		//short form
//		return topIndex == -1;
	}
*/