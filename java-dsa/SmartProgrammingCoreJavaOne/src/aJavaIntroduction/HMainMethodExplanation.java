package aJavaIntroduction;
/*
main method syntaxes

1.
	public static void main(String[] args) {
		System.out.println("Hello");
	}
	
	
2.

this will not give compilation error but gives run time error , as JRE doesnot find the 
main method , main method not found 

	public static void main(Integer[] args) {
		System.out.println("Hello");
	}
	
this will become a method

3.
we can change the sequence of static and public , incorrect and compile time error 

	 static public void main(String[] args) {
		System.out.println("hello");
	}
	
4.

this below code gives compile time error - as after return type we must write methodname only

	 public void static main(String[] args) {
		System.out.println("hello");
	}
java needs method name after return type	
	
5.
below is correct syntax

	 public static void main(String[         ] args) {
		System.out.println("hello");
	}
	
6.
correct syntax for method but incorrect for main

	 public static void main(String args) {
		System.out.println("hello");
	}
 Main method not found in class
 
 7.
 valid main method
 	 public static void main(String[] xyz) {
		System.out.println("hello");
	}
	
8.
valid main method , with var args

	 public static void main(String... xyz) {
		System.out.println("hello");
	}
 
 9.
 varargs is 3 dots if not compile time error
 
 	 public static void main(String.. xyz) {
		System.out.println("hello");
	}
10.
Main method not found in class at run time
	 protected static void main(String[] xyz) {
		System.out.println("hello");
	}
	
incorrect syntax for main method

11.

correct main method syntax to use final keyword

	 public final static void main(String[] xyz) {
		System.out.println("hello");
	}
	
12.
	
valid main method syntax

	 public synchronized static void main(String[] xyz) {
		System.out.println("hello");
	}
	
13.
valid main method

	 public strictfp static void main(String[] xyz) {
		System.out.println("hello");
	}
	
14.
incorrect syntax for main method

Main method is not static in class
	 public void main(String[] xyz) {
		System.out.println("hello");
	}
	
15.
incorrect syntax

Main method not found in class

	 static void main(String[] xyz) {
		System.out.println("hello");
	}
 */
public class HMainMethodExplanation {

	 static void main(String[] xyz) {
		System.out.println("hello");
	}
}
