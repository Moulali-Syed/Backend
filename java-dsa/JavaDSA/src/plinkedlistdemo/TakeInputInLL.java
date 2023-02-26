package plinkedlistdemo;

import java.util.Scanner;

public class TakeInputInLL {

	public static Node<Integer> takeInputLL(){
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		Node<Integer> head = null,tail = null;
		while(n!=-1) {
			
			Node<Integer> curNode = new Node<>(n);
			if(head==null) {
				head = curNode;
				tail = curNode;
			}else {
				tail.next = curNode;
				tail = tail.next;
			}
			n = s.nextInt();
		}
		return head;
	}
}
