package plinkedlistdemo;

public class LinkedListUse2 {

	public static Node<Integer> createLinkedList(){
		Node<Integer> n1 = new Node<>(10);
		Node<Integer> n2 = new Node<>(20);
		Node<Integer> n3 = new Node<>(30);
		
		n1.next = n2;
		n2.next = n3;
		
		return n1;
	}
	
	public static void printLL(Node<Integer> head) {
		Node<Integer> temp = head;
		
		while(temp != null) {
			System.out.println(temp.data);
			temp = temp.next;
		}
	}
	
	public static void main(String[] args) {
		Node<Integer> head = createLinkedList();
		printLL(head);
	}
}
