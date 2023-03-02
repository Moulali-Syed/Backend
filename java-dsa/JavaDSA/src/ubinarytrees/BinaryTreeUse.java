package ubinarytrees;

public class BinaryTreeUse {

	public static void main(String[] args) {
		BinaryTreeNode<Integer> root = new BinaryTreeNode<>(1);
		
		BinaryTreeNode<Integer> rootLeft = new BinaryTreeNode<>(2);
		
		BinaryTreeNode<Integer> rootRight = new BinaryTreeNode<>(3);
		
		root.left = rootLeft;
		root.right = rootRight;
		
		BinaryTreeNode<Integer> rootLeftRight = new BinaryTreeNode<>(4);
		rootLeft.right = rootLeftRight;
		
		BinaryTreeNode<Integer> rootRightLeft = new BinaryTreeNode<>(5);
		rootRight.left =  rootRightLeft;
		
	}
	
	/*
	 * ----print tree recursively -----
	 * Lets create a function that prints the tree nodes recursively
	 * say we have root , first we print all the children from the left side
	 * and we print all children in right side 
	 */
	public static void printTree(BinaryTreeNode<Integer> root) {
		//to do write base case
		if(root==null) {
			return ;
		}
		//lets first print root data
		System.out.println(root.data);
		printTree(root.left);
		printTree(root.right);
		/*
		 * this below code will fall short of a case if my root is null , case
		 * so follow above code
		//now lets print tree recursively on left side
		if(root.left !=null) {
			printTree(root.left);
		}
		
		//then print tree recursively on right side
		if(root.right != null) {
			printTree(root.right);
		}
		*/
	}
}
