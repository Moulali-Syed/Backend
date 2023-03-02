package trees;

public class FNodeWithLargestData {

	//find the tree node that has largest number
	
	public static int largest(BTreeNode<Integer> root) {
		if(root==null) {
			return Integer.MIN_VALUE;
		}
		
		int ans = root.data;
		for(int i=0;i<root.children.size();i++) {
			int childLargest = largest(root.children.get(i));
			if(childLargest>ans) {
				ans = childLargest;
			}
		}
		return ans;
	}
}
