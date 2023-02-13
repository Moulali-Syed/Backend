package hStrings;

import java.util.Scanner;

public class DTakingStringInput {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		String str = s.next();//deals with token of input before a delimiter
		
		String str1 = s.nextLine();//will keep on including everything 
		
		System.out.println(str);
		
	}
}
