package hStrings;
/*
What if my strings to be mutable

we can achieve using StringBuffer 
 */
public class MStringvsStringBuffer {

	public static void main(String[] args) {
		StringBuffer str = new StringBuffer("apple");
		str.setCharAt(3, 'g');
		System.out.println(str);
		
		System.out.println(str.length());
		System.out.println(str.append("hi"));
		
		
		StringBuffer s = new StringBuffer("d");
		for(int i=0;i<5;i++) {
			s.append("z");
		}
		System.out.println(s);
	}
}
