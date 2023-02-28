package squeue;
/*
 Circular Queue
 
 if we have space vacant in queue and we cannot move forward in queue
 then come to first and check and add 
 */
public class DCircularQueue {

	private int data[];
	private int front;
	private int rear ;
	private int size;
	
	DCircularQueue(){
		data = new int[5];
		front = -1;
		rear = -1;
	}
	
	//dequeue and enqueue
	
	public void enqueue(int ele) {
		if(size==data.length) {
			System.out.println("Queue full exception");
			return ;
		}
		
		if(size==0) {
			front++;
		}
		
		rear++;
		//if we are reaching this step means we have space in our queue, if
		//no space we will have stopped at first if when checking size equals to length of data
		//use below if condition for a circular queue
		if(rear == data.length) {
			rear = 0;
		}
		//or use below one step for crct rear
//		rear = (rear+1)% data.length;
		data[rear] = ele;
		size++;
		
	}
	
	public int dequeue() {
		if(size==0) {
			System.out.println("Queue is empty exception");
			return Integer.MIN_VALUE;
		}
		
		int temp = data[front];
		front++;
		//use below if for a circular queue
		if(front == data.length) {
			front = 0;
		}
		front = (front+1)%data.length;
		size--;
		
		if(size==0) {
			front = -1;
			rear = -1;
		}
		return temp;
	}
}
