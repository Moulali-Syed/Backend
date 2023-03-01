package trees;

public class BTreeUse {

	public static void main(String[] args) {
		BTreeNode<Integer> root = new BTreeNode<>(4);
		BTreeNode<Integer> node1 = new BTreeNode<>(2);
		BTreeNode<Integer> node2 = new BTreeNode<>(3);
		BTreeNode<Integer> node3 = new BTreeNode<>(5);
		BTreeNode<Integer> node4 = new BTreeNode<>(6);
		
		root.children.add(node1);
		root.children.add(node2);
		root.children.add(node3);
		
		node2.children.add(node4);
		
		System.out.println(root);

	}
}
