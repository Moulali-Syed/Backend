package trees;

import java.util.Scanner;

/*
 we have takeInput of a tree recursively 
  						2
  					/      \
  				  3         8
  				/  \		\
  			  9     4 	    11
  			  
  			  in this recursive way ,we take input start from 2 and move on till we 
  			  fill in what are child nodes of 3 then move to 9 and 4 
  			  then comes back to 8 and look at its children
  			  
  			  Instead lets take input level wise
  			  
  			  as 2  -->  3, 8 ----> 9,4,11
  			  
  			  in the order we get , we want their child in same order
  			  sounds like perfect use case for queue
  			  
  			  we maintain queue - as a way , we read an element and not read its children
 */
public class DTakeInputLevelWise {

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
}
