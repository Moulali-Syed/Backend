package cHowDataIsStored;
/*
 When we are trying to store a charcater its corresponding 
 
 ASCII value will get stored
 
 when i say char ch = 'a';//then 97 will be stored
 'A' - 65
 '0' - 48
 
 Whenever we are dealing with characters deep down we are dealing with ASCII value 
 */
public class CHowCharactersStored {

	public static void main(String[] args) {
		int min = Integer.MIN_VALUE;
		int max = Integer.MAX_VALUE;
		
		System.out.println(min +"  " + max);
		
		System.out.println('a'+3);//100
	}
}
