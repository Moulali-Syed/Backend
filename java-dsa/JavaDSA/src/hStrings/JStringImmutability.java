package hStrings;

public class JStringImmutability {

	public static void main(String[] args) {
		/*
		 String Immuatbility
		 */
		
		String str = "apple";
		String st = "apple";
		
		String s = "apple";
		
		/*
		 str will get created in String pool
		 then st will check before creating whether we have the same string in
		 StringPool , as it is found it will start pointing to it
		 
		 similarly s will also points to same memory location in string pool
		 
		 thus all three will be referencing to same memory location that is present
		 in string pool 
		 */
		
		String str2 = new String("apple");
		/*
		 This will not be stored in string pool, stored in heap directly
		 */
		
		/*
		 * String in java is immuatable
		 * 
		 * once string is created we cannot change that string 
		 * we cannot add or remove characters in java string
		 * 
		 * this is because of String pool optimization 
		 */
		
		/*
		When ever we are adding to string 
		it is creating in a new string , but not altering the existing 
		 */
	}
}
