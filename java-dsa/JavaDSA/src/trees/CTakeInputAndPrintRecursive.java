package trees;

import java.util.Scanner;

/*
 Whenever we are solving tree problems
 we must always imagine of a tree structure 
 	with root and child nodes attached to it 
 	
 	try to solve it recursively , solve for one child tree , it will get 
 	solve for all other 
 */
public class CTakeInputAndPrintRecursive {

	public static BTreeNode<Integer> takeInput(Scanner s){
		int n;
		
		System.out.println("Enter next node data");
		n = s.nextInt();
		BTreeNode<Integer> root = new BTreeNode<>(n);
		System.out.println("Enter number of children for "+n);
		int childCount = s.nextInt();
		for(int i=0;i<childCount;i++) {
			BTreeNode<Integer> child = takeInput(s);
			root.children.add(child);
		}
		return root;
	}
	
	public static void print(BTreeNode<Integer> root) {
		String s = root.data + ":";
		for(int i=0;i<root.children.size();i++) {
			s = s+ root.children.get(i).data +",";
		}
		
		System.out.println(s);
		for(int i=0;i<root.children.size();i++) {
			print(root.children.get(i));
		}
	}
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		BTreeNode<Integer> root = takeInput(s);
	}
}
