package hStrings;

/*
In java we have 2 main memory sections 

Stack Memory    and     Heap Memory 

when we say
int[] arr = new int[4];

we store arr reference in stack memory 

but actual array elements will be stored in heap memory
heap is comparitively big than stack memory 

 */
public class IHowStringsStoredInJava {

	public static void main(String[] args) {
		
		//we can create strings in below ways
		
		String str = "abc";
		String str2 = new String("abc");
		
		//reference holds the address where actual string is stored 	
		
		
		/*
		 When we create a string as String str = "abc" 
		 this will be stored in String Pool
		 
		 When i try to create a string String str2 = "abc"
		 
		 Then it will check in string pool whether we have the same string value
		 in string pool and starts pointing to that 
		 */
	}
}
