package hStrings;

import java.util.Scanner;

public class EPrintAllCharactersOfString {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		String str = s.next();
		
		for(int i=0;i<str.length();i++) {
			System.out.println(str.charAt(i));
		}
	}
}
