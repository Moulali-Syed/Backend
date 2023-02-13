package hStrings;

public class KStringComparision {

	public static void main(String[] args) {
		int[] arr1 = {};
		int[] arr2 = {};
		
		if(arr1==arr2) {
			System.out.println("Both arrays are equal");
		}else {
			System.out.println("Both arrays are not equal");
		}
		
		System.out.println(arr1+"  "+arr2);//[I@379619aa  [I@cac736f
		
		
		String str1 = "abc";
		String str2 = "abc";
		String str3 = new String("abc");
		if(str1==str2) {
			System.out.println("Both strings are equal");//
			//because of string pool optimization we get both strings are equal
		}else {
			System.out.println("Both strings are not equal");
		}
		
		if(str1==str3) {
			System.out.println("Both strings are equal");
		}else {
			System.out.println("Both strings are not equal");
		}
		
		//so to compare one string with other use equals method
		if(str1.equals(str3)) {
			System.out.println("str1 and str3 are equal");
		}
	}
}
