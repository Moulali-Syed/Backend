package plinkedlistdemo;

public class DeleteNodeInLL {

	public static void main(String[] args) {
		Node<Integer> n1 = new Node<>(10);
		Node<Integer> n2 = new Node<>(20);
		Node<Integer> n3 = new Node<>(30);
		Node<Integer> n4 = new Node<>(40);
		n1.next = n2;
		n2.next = n3;
		n3.next = n4;
		
		Node<Integer> head = deleteNode(n1,2);
		while(head != null) {
			System.out.print(head.data+"  ");
			head = head.next;
		}
	}
	
	public static Node<Integer> deleteNode(Node<Integer> head,int pos){
		Node<Integer> temp = head;
		
		int count = 0;
		Node<Integer> reqNode = null;
		while(temp != null && count<pos-1) {
			count++;
			temp = temp.next;
		}
		reqNode = temp;
		
		reqNode.next = temp.next.next;
		
		return head;
	}
}
