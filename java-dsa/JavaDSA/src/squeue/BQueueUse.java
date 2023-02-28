package squeue;

public class BQueueUse {

	public static void main(String[] args) {
		BQueueUsingArray queue = new BQueueUsingArray();
		queue.enqueue(10);
		queue.enqueue(20);
		queue.enqueue(30);
		queue.enqueue(40);
		
		System.out.println(queue.dequeu());
		System.out.println(queue.dequeu());
		
		System.out.println(queue.size());
		
		System.out.println(queue.front());
		
		System.out.println(queue.isEmpty());
	}
}
