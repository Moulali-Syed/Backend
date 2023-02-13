package hStrings;

public class BMoreFunctionsOnString {

	public static void main(String[] args) {
		String str1 = "Coding";
		String str2 = "fun";
		
		System.out.println(str1+str2);
		
		//concatenating strings
		str1+=str2;
		System.out.println(str1);
		
		str1 = str2.concat(str1);
		System.out.println(str1);
		
		//comparing strings
		System.out.println(str1.equals(str2));//false
		
		//compares strings lexographically 
		/* 
		 if length of both strings is not equal - then it returns difference in length
		 if both strings are of equal length then it returns non-zero difference in ASCII
		 values starting from 0th to n-1st index , if all indices of string are equal
		 then it returns 0
		 
		 */
		System.out.println(str1.compareTo(str2));
		
		
		//contains
		System.out.println(str1.contains(str2));//true
		
		System.out.println("abcd".compareTo("twor"));//-19
		
		
	}
}
