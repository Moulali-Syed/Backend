package squeue;

public class EMakingQueueDynamically {
	private int data[];
	private int front;
	private int rear ;
	private int size;
	
	EMakingQueueDynamically(){
		data = new int[5];
		front = -1;
		rear = -1;
	}
	
	//dequeue and enqueue
	public void enqueue(int ele) {
		if(size==data.length) {
			doubleCapacity();
		}
		
		if(size==0) {
			front++;
		}
		rear++;
		if(rear == data.length) {
			rear = 0;
		}
		//or use below one step for crct rear
//		rear = (rear+1)% data.length;
		data[rear] = ele;
		size++;
		
	}
	
	private void doubleCapacity() {
		int temp[] = data;
		data = new int[2*temp.length];
		int index = 0;
		for(int i=front;i<temp.length;i++) {
			data[index++] = temp[i];
		}
		
		for(int i=0;i<front-1;i++) {
			data[index++] = temp[i];
		}
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
		//or use below instead of above if statement
//		front = (front+1)%data.length;
		size--;
		
		if(size==0) {
			front = -1;
			rear = -1;
		}
		return temp;
	}
}
