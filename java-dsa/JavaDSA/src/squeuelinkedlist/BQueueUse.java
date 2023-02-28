package squeuelinkedlist;

public class BQueueUse {

	public static void main(String[] args) {
		AQueueUsingLinkedList<Integer> queue = new AQueueUsingLinkedList<>();
		
		int arr[] = {10,20,30,40,50};
		for(int elem: arr) {
			queue.enqueue(elem);
		}
		System.out.println(queue.size());
		while(!queue.isEmpty()) {
			System.out.println(queue.dequeue());
		}
	}
}
