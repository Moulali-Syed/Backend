package trees;

public class HDepthOfNode {

	public static void depth(BTreeNode<Integer> root,int k) {
		if(k<0) {
			return;
		}
		if(k==0) {
			System.out.println(root.data);
			return;
		}
		
		for(int i=0;i<root.children.size();i++) {
			depth(root.children.get(i),k-1);
		}
		
	}
}
