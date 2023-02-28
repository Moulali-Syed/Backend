package squeue;
/*
 Queue - follows FIFO
 
 everything in queue revolves around - enqueue , dequeue , front 
 
 we can use array or linked list to create a queue 
 
 insertions happens at rear end 
 deletion happens at front end 
 
 */
public class BQueueUsingArray {

	//declare an array to store our queue elements
	private int data[];
	//have a reference to the rear and front end of the queue
	
	private int front;
	private int rear;
	private int size;
	
	public BQueueUsingArray() {
		data = new int[5];
		front = -1;
		rear = -1;
	}
	
	public BQueueUsingArray(int capacity) {
		data = new int[capacity];
		front = -1;
		rear = -1;
	}
	
	public int size() {
		return size;
	}
	
	public boolean isEmpty() {
		return size == 0;
	}
	
	public void enqueue(int elem) {
		if(size == data.length) {
			System.out.println("Queue is full");
			return ;
		}
		if(size==0) {
			data[0] = elem;
			front = 0;
			rear = 0;
			size++;
		}else {
			rear++;
			data[rear] = elem;
			size++;
		}
	}
	
	public int front() {
		if(size==0) {
			System.out.println("Queue is Empty");
			return Integer.MIN_VALUE;
		}
		return data[front];
	}
	
	public int dequeu() {
		if(size==0) {
			System.out.println("Queue is empty");
			return Integer.MIN_VALUE;
		}
		
		int e = data[front];
		front++;
		size--;
		
		if(size==0) {
			front = -1;
			rear = -1;
		}
		
		return e;
	}
}
