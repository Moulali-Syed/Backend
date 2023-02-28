package rstacks;
/*
 Using a linked list is lot more flexible 
 as we can use generics
 */

class Node<T>{
	T data;
	Node<T> next;
	
	Node(T data){
		this.data = data;
	}
}
public class EStackUsingLinkedList<T> {
	private Node<T> head;
	private int size;
	
	//as we declared instance variables Node , size they by default have null and 0 values
	//just to highlight we are writing a constructor
	public EStackUsingLinkedList() {
		head = null;
		size = 0;
	}
	public int size() {
		//to get size , if we are travelling all thru the LinkedList each time
		//then we get time complexity of O(N)
		//so to avoid this declare a instance variable size
		return size;
	}
	/*
	 we keep referencing our new node each time as head
	 */
	public T top() {
		if(head == null) {
			System.out.println("Stack empty exception");
		}
		return head.data;
	}
	
	public void push(T ele) {
		Node<T> newNode = new Node<>(ele);

		newNode.next = head;
		head = newNode;
		size++;

	}
	
	public T pop() {
		if(head == null) {
			System.out.println("Stack empty exception");
		}
		T e = head.data;
		head = head.next;
		size--;
		return e;
	}
	
	public boolean isEmpty() {
		if(size == 0) {
			return true;
		}
		return false;
		
		//short form
//		return size == 0;
	}
}
