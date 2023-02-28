package squeuelinkedlist;

import java.util.LinkedList;
import java.util.Queue;

/*
 Queue in collections framework in an interface
 
 Stack and LinkedList are classes 
 */
public class CQueueInCollectionsFramework {

	public static void main(String[] args) {
		//we can only create a reference as Queue is an interface
		Queue<Integer> queue ;
		
		//LinkedList class has implementation for Queue Interface
		queue = new LinkedList<>();
		
		//we can see that all methods in Queue were implemented by LinkedList
		
		queue.add(10);
		queue.add(20);
		
		queue.size();
		
		queue.peek();
		
		queue.remove();
		
		queue.poll();
	}
}
