package ogenerics;

public class PairGenericUse {

	public static void main(String[] args) {

		PairGeneric<String> p1 = new PairGeneric<>("Apple","Grapes");
		System.out.println(p1.getFirst());
		System.out.println(p1.getSecond());
		
		//below code is very problematic, never use it
		//it is working because everything is inherited from Object class
		//so it is automatically taking Object, now it can accept anything
		PairGeneric p2 = new PairGeneric(1,2);
		p2.getFirst();
		p2.setSecond("hi");
		System.out.println(p2.getSecond());
		
		
		//if we have to use primitive then mention there wrapper class
		PairGeneric<Integer> p3=new PairGeneric<>(12,13);
		//from newer versions of java no need to mention type on right side 
	}
}
