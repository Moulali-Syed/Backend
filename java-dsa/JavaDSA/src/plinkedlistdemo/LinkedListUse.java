package plinkedlistdemo;

public class LinkedListUse {

	
	//lets create a function to create a linked list
	public static Node<Integer> createLinkedList(){
		Node<Integer> n1 = new Node<>(10);
		Node<Integer> n2 = new Node<>(20);
		Node<Integer> n3 = new Node<>(30);
		Node<Integer> n4 = new Node<>(40);
		n1.next = n2;
		n2.next = n3;
		n3.next = n4;
		
		return n1;
	}
	
	public static void printLL(Node head) {
		while(head!=null) {
			System.out.print(head.data+"  ");
			head = head.next;
		}
	}
	
	//increment every element in Linkedlist by 1
	public static void incrementLL(Node<Integer> head) {
		Node<Integer> temp = head;
		
		while(temp!=null) {
			temp.data++;
			temp = temp.next;
		}
	}
	public static void main(String[] args) {
		
		Node<Integer> head = createLinkedList();
		
		printLL(head);
		incrementLL(head);
		printLL(head);
		/*
		Node<Integer> n1 = new Node<>(10);
		System.out.println(n1.data);
		System.out.println(n1.next);
		Node<Integer> n2 = new Node<>(20);
		
		
		Node<Integer> n3 = new Node<>(30);
		
		n1.next = n2;
		n2.next = n3;
		
		*/
	}
}
