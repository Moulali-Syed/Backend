package ogenerics;

public class AGenericsDemoExplanation {

}
/*

Generics:
I want to create a Pair class
it has 2 instance variables - both are private

lets create a constructor ,getters and setters 

//create Pair class as below
 
package ogenerics;

public class Pair {

	private int first;
	private int second;
	
	public Pair(int first,int second) {
		this.first = first;
		this.second = second;
	}
	
	public int getFirst() {
		return this.first;
	}
	
	public int getSecond() {
		return this.getSecond();

	}
	
	public void setFirst(int fir) {
		this.first = fir;
	}
	
	public void setSecond(int sec) {
		this.second = sec;
	}
}

 --------------------
 Now lets create another class PairUse
 
 package ogenerics;

public class PairUse {

	public static void main(String[] args) {
		Pair p = new Pair(2,3);
		
		p.setFirst(10);
		System.out.println(p.getFirst());
		System.out.println(p.getSecond());
	}
}

-----------------
By using above we can print integer values, 

say now i need a class that takes 2 strings in constructor and return them using
getters and setters 

instead of int in our Pair class, now i have to replace it with String

exact copy of Pair class - replace int with String

this is waste of code

Here comes Generics , which helps in generailising this class

we give T instead of int/string while creating a class
then actually creating object, i will tell what this T to be 

create a generic class as below:

package ogenerics;

public class PairGeneric<T> {

	private T first;
	private T second;
	
	public PairGeneric(T first,T second) {
		this.first = first;
		this.second = second;
	}
	
	public T getFirst() {
		return this.first;
	}
	
	public T getSecond() {
		return this.second;

	}
	
	public void setFirst(T fir) {
		this.first = fir;
	}
	
	public void setSecond(T sec) {
		this.second = sec;
	}
	
}

---------

now we can use generic as below

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


----------------------
now comes a requirement that the arguments we are passing to be of different 
datatype , we can do this as well


package ogenerics;

public class PairGenericDifferentDataType<T,V> {

	private T first;
	private V second;
	
	public PairGenericDifferentDataType(T first,V second) {
		this.first = first;
		this.second = second;
	}
	
	public T getFirst() {
		return this.first;
	}
	
	public V getSecond() {
		return this.second;

	}
	
	public void setFirst(T fir) {
		this.first = fir;
	}
	
	public void setSecond(V sec) {
		this.second = sec;
	}
	
}



package ogenerics;

public class PairGenericDifferentDataTypeUse {

	public static void main(String[] args) {
		PairGenericDifferentDataType<Integer,String> p1 =
				new PairGenericDifferentDataType<>(12,"Apple");
		
		System.out.println(p1.getFirst());
		
		System.out.println(p1.getSecond());
	}
}

--------------------

I want to create a pair using the same above class with 3 elements in it
we can do by 1st argument as pair, 2nd as element


package ogenerics;

public class PairGenericDifferentDataTypeUse {

	public static void main(String[] args) {
		
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

*/