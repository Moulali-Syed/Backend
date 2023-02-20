package ogenerics;

public class PairGenericDifferentDataTypeUse {

	public static void main(String[] args) {
		PairGenericDifferentDataType<Integer,String> p1 =
				new PairGenericDifferentDataType<>(12,"Apple");
		
		System.out.println(p1.getFirst());
		
		System.out.println(p1.getSecond());
		
		
		int a = 10;
		int b = 20;
		int c = 30;
		PairGenericDifferentDataType<Integer,Integer> internalPair = 
				new PairGenericDifferentDataType<>(a,b);
		PairGenericDifferentDataType<PairGenericDifferentDataType,Integer> p3 
						= new PairGenericDifferentDataType<>(internalPair,c);
		
		//now to access the elements in 1st pair
		System.out.println(p3.getFirst().getFirst());//10
		System.out.println(p3.getFirst().getSecond());//20
		
		System.out.println(p3.getSecond());//30
	}
}
