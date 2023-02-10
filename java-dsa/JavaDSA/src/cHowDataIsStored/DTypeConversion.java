package cHowDataIsStored;

public class DTypeConversion {

	public static void main(String[] args) {
		//converting a character to integer is fine
		
		char ch = 'a';
		int a = ch;//implicit typecasting
		System.out.println(a);
		
		//we cannot convert int to char directly , this gives error as 4 bytes cannot be in 2bytes size
		//we can do it explicitly , because there might be data loss
		ch = (char)a;
		
		int i = (int)10.6;
		System.out.println('a'+1);
		
		int p  = 'c';
		System.out.println(p);
	}
}
