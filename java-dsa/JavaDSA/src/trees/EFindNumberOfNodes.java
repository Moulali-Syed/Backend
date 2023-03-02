package trees;
/*
 * lets call each node and ask about its children
 */
public class EFindNumberOfNodes {

	public static void main(String[] args) {
		
	}
	
	public static int numNodes(BTreeNode<Integer> root) {
		if(root==null) {
			return 0;//this is edge case
		}
		int count = 1;
		for(int i=0;i<root.children.size();i++) {
			count+=numNodes(root.children.get(i));//this will be acting as base case 
		}
		
		return count;
	}
}
