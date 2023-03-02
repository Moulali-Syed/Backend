package trees;

import java.util.Scanner;
//not a right solution -*
public class GHeightOfTree {

	public static int heightOfTree(BTreeNode<Integer> root) {
		
		if(root==null) {
			return 0;
		}
		int height = 1;
		int child = root.children.size();
		for(int i=0;i<child;i++) {
			if(i==child-1) {
				height++;
			}
			child = heightOfTree(root.children.get(i));
		}
		return height;
	}
	public static BTreeNode<Integer> takeInputLevelwise(){
		Scanner s = new Scanner(System.in);
		
		System.out.println("Enter root data");
		int rootData = s.nextInt();
		
		//lets use a queue which is made of LinkedList
		DQueueUsingLinkedList<BTreeNode<Integer>> pendingNodes = new DQueueUsingLinkedList<>();
		
		BTreeNode<Integer> root = new BTreeNode<>(rootData);
		pendingNodes.enqueue(root);
		
		while(!pendingNodes.isEmpty()) {
			BTreeNode<Integer> frontNode = pendingNodes.dequeue();
			System.out.println("Enter num of children of : "+frontNode.data);
			int numChildren = s.nextInt();
			for(int i=0;i<numChildren;i++) {
				System.out.println("Enter "+(i+1)+" th child of "+frontNode.data);
				int child = s.nextInt();
				BTreeNode<Integer> childNode = new BTreeNode<>(child);
				frontNode.children.add(childNode);
				pendingNodes.enqueue(childNode);
			}
		}
		return root;
	}
	public static void main(String[] args) {
		BTreeNode<Integer> root = takeInputLevelwise();
		System.out.println(heightOfTree(root));
	}
}
