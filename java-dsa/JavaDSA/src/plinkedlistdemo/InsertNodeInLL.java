package plinkedlistdemo;

public class InsertNodeInLL {

	public static void main(String[] args) {
		
		Node<Integer> n1 = new Node<>(10);
		Node<Integer> n2 = new Node<>(20);
		Node<Integer> n3 = new Node<>(30);
		Node<Integer> n4 = new Node<>(40);
		n1.next = n2;
		n2.next = n3;
		n3.next = n4;
		Node<Integer> head = insertNode(n1,12,0);
		
		while(head!=null) {
			System.out.println(head.data);
			head = head.next;
		}
	}
	
	public static Node<Integer> insertNode(Node<Integer> head,int n,int pos) {
		Node<Integer> temp = head;
		Node<Integer> newNode = new Node<Integer>(n);
		
		if(pos==0) {
			newNode.next = temp;
			temp = newNode;
			return temp;
		}
		int count = 0;
		Node<Integer> prev = null;
		while(temp != null && count<pos) {
			count++;
			prev = temp;
			temp = temp.next;
		}
		
		Node<Integer> next = prev.next;
		
		newNode.next = next;
		prev.next = newNode;
		
		return head;
	}
}
