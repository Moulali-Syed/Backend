package hStrings;

public class CStringSubStringFunction {

	public static void main(String[] args) {
		String str = "Coding";
		
		System.out.println(str.substring(0));//Coding
		
		System.out.println(str.substring(2));//ding
		
		System.out.println(str.substring(4));//ng
		
		System.out.println(str.substring(6));//if we are giving string length then we get nothing in output
		
		System.out.println(str.substring(2,4));//di [end index character is not included]
		
		
		System.out.println(str.substring(str.length()));// empty 
	}
}
