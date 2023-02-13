package hStrings;
/*
Reverse String Word Wise

Reverse the given string word wise. 
That is, the last word in given string should come at 1st place,
 last second word at 2nd place and so on. Individual words should remain as it is.
Input format 
String in a single line
Output format 
Word wise reversed string in a single line
Constraints 
0 = S = 10^7
where S represents the length of string, S.
Sample Input 1
Welcome to Coding Ninjas
Sample Output 1
Ninjas Coding to Welcome
Sample Input 2
Always indent your code
Sample Output 2
code your indent Always
 */
public class NReverseStringWordWise {

	public static void main(String[] args) {
		reverseStringWords("Welcome to Coding Ninjas");
	}
	
	public static void reverseStringWords(String str) {
		String[] strArr = str.split(" ");
		
		StringBuffer s = new StringBuffer("");
		for(int i=strArr.length-1;i>=0;i--) {
			s.append(strArr[i]);
			s.append(" ");
		}
		
		System.out.println(s.toString().trim());
	}
}
