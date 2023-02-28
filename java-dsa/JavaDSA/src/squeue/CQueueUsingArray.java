package squeue;

public class CQueueUsingArray {

	//FIFO
	//to insert we insert at rear end
	//to remove to remove from front
	
	//have a pointer for size
	
	//as we are implementing using array - declare an array
	
	int[] data;
	int size;
	int front;
	int rear;
	
	CQueueUsingArray(){
		data = new int[5];
		front = -1;
		rear = -1;
		
	}
	CQueueUsingArray(int capacity){
		data = new int[capacity];
		front = -1;
		rear = -1;
	}
	//queue will be dequeue and enqueue
	
	public void enqueue(int ele) {
		if(size == data.length) {
			System.out.println("Queue is full");
			return ;
		}
		
		if(size==0) {
			front++;
		}
		
		rear++;
		data[rear] = ele;
		size++;
	}
	
	public int dequeue() {
		if(size==0) {
			System.out.println("Queue is empty");
			return Integer.MIN_VALUE;
		}
		
		int temp = data[front];
		front++;
		size--;
		if(size==0) {
			front = -1;
			rear = -1;
		}
		return temp;
	}
}
