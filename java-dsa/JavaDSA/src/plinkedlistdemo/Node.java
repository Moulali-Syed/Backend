package plinkedlistdemo;

public class Node<T> {

	//As we know every node in a linked list will have the data and the 
	//reference to the corresponding node 
	T data;
	Node<T> next;
	
	Node(T data){
		this.data = data;
//		next = null;//need not mention because default value of any reference variable is null
	}
}
