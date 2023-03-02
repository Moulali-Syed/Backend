package trees;
/*
 With linked list implementation of queue we can 
 have flexibility to use generics 
 
 ------
 
 When we are using linked list to build queue
 insert at end 
 this way we get all operations happening at a time complexity of O(1)
 
 -------
 
 We have seen advanatage of inserting at front in case stack while using linked list
 here it wont works
 */
public class DQueueUsingLinkedList<T> {

	 private Node<T> front;
	 private Node<T> rear;
	 int size;
	 
	 public DQueueUsingLinkedList() {
		 front = null;
		 rear = null;
		 size = 0;
	 }
	 
	 public int size() {
		return size; 
	 }
	 
	 //add at end of LL
	 public void enqueue(T elem) {
		 Node<T> newNode = new Node<>(elem);
		 size++;
		 if(front == null) {
			 front = newNode;
			 rear = newNode;
		 }else {
			 rear.next = newNode;
			 rear = rear.next;
		 }
	 }
	 
	 //remove from begining
	 public T dequeue() {
		 T temp = front.data;
		 front = front.next;
		 if(front == null) {
			 rear = null;
		 }
		 size--;
		 return temp;
	 }
	 
	 public boolean isEmpty() {
		 if(size==0) {
			 return true;
		 }
		 return false;
		 
//		 return size == 0;
		 
	 }
	 
	 public T front() {
		 if(front == null) {
			 System.out.println("Queue Empty Exception");
		 }
		 return front.data;
	 }
}
