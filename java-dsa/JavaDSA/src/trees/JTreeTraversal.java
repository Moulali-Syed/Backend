package trees;
/*
 we have 3 types of traversal
 		level order
 					1
 				2       3
 			1     3    4  5
 			
 		---> 1 2 3 1 3 4 5 (output)
 		
 		pre order
 					1
 				2       3
 			1     3    4  5
 			
 		----> 1 2 1 3 3 4 5
 		
 		post order
 					1
 				2       3
 			1     3    4  5
 			
 		----> 1 3 2 4 5 3 1
 		
 */
public class JTreeTraversal {

	public static void preOrderTravers(BTreeNode<Integer> root) {
		if(root == null) {
			return;	
		}
		System.out.print(root.data+" ");
		for(int i=0;i<root.children.size();i++) {
			preOrderTravers(root.children.get(i));
		}
	}
}
