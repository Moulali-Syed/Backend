package hStrings;

public class AIntroToStrings {

	public static void main(String[] args) {
		char[] arr = {'C','o','d','i','n','g'};//string deep down will be a charcater array
		//we can deal this easily using String
		
		String str = "Coding";
		
		//to know length of string we have length function 
		System.out.println(str.length());
		
		System.out.println(arr.length);//in array it is a property 
		
		//we can indexing in strings
		System.out.println(str.charAt(0));
		
		
//		System.out.println(str.charAt(10)); //Exception in thread "main" java.lang.StringIndexOutOfBoundsException:
		
	}
}
