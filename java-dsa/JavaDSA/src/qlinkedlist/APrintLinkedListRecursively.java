package qlinkedlist;

import java.util.Scanner;

public class APrintLinkedListRecursively {

	public static void main(String[] args) {
		Node<Integer> head = takeInputLL();
		printLLRecursively(head);
	}
	
	public static void printLLRecursively(Node<Integer> head) {
		
		if(head == null) {
			return;
		}
		
		printLLRecursively(head.next);
		System.out.println(head.data);
	}
	public static Node<Integer> takeInputLL(){
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		Node<Integer> head = null, tail = null;
		while(n!=-1) {
			Node<Integer> newNode = new Node<>(n);
			
			if(head == null) {
				head = newNode;
				tail = newNode;
			}else {
				tail.next = newNode;
				tail = tail.next;
			}
			n = s.nextInt();
		}
		return head;
	}
}
