package ubinarytrees;
/*
 My BinaryTree node will have data and left and right child address
 
 
 */
public class BinaryTreeNode<T> {

	public T data;
	public BinaryTreeNode<T> left;
	public BinaryTreeNode<T> right;
	
	BinaryTreeNode(T data){
		this.data = data;
	}
}
