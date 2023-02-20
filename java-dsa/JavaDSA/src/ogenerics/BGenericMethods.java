package ogenerics;
/*
 say i have method which i pass an array
 and it sorts its elements
 
 i can pass integer array , double array ,... any type of array
 my same method should be able to handle it
 
 i should not writing different methods for each datatype 
 
 Generic methods can help this to overcome
 */
public class BGenericMethods {

	public static void print(int[] arr) {
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
		}
	}
	
	//we can generalise the method
	public static<T> void printGeneric(T[] arr) {
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
		}
	}
	
	//instance methods
	public <T> void printSomething(T n) {
		System.out.println(n);
	}
	public static void main(String[] args) {
		int[] arr = {1,2,3,4,5};
		print(arr);
		
		Double[] arr1 = {1.0,2.1,4.4,5.2};
		printGeneric(arr1);
		
		//if non static 
		BGenericMethods obj = new BGenericMethods();
		obj.printSomething("Apple");
		obj.printSomething(12);
	}
}
