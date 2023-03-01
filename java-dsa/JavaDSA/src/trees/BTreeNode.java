package trees;

import java.util.ArrayList;

/*
 TreeNode - lets see how to implement this treenode
 
 we can either use array or linked list
 
 but if i want a particular node i need to traverse thru all the nodes
 this will be a problem
 
 in case of array - we have to define the size at the begining this is a big problem
 
 so lets use ArrayList , which will increase its size dynamically 
 
 lets make TreeNode class as generic
 */
public class BTreeNode<T> {
	
	//data to be stored
	public T data;
	public ArrayList<BTreeNode<T>> children;
	
	public BTreeNode(T data){
		this.data = data;
		children = new ArrayList<>();
	}
	
	

}
