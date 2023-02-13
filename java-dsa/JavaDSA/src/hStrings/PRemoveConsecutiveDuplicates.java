package hStrings;
/*
Remove Consecutive Duplicates

For a given string(str), remove all the consecutive duplicate characters.
Example:
Input String: "aaaa"
Expected Output: "a"

Input String: "aabbbcc"
Expected Output: "abc"
 Input Format:
The first and only line of input contains a string without any leading 
and trailing spaces. All the characters in the string would be in lower case.
Output Format:
The only line of output prints the updated string.
Note:
You are not required to print anything. It has already been taken care of.
Constraints:
0 <= N <= 10^6
Where N is the length of the input string.

Time Limit: 1 second
Sample Input 1:
aabccbaa
Sample Output 1:
abcba
Sample Input 2:
xxyyzxx
Sample Output 2:
xyzx
 */
public class PRemoveConsecutiveDuplicates {

	public static void main(String[] args) {
		removeConsecDuplicates("aabccbaa");
	}
	
	public static void removeConsecDuplicates(String st) {
		StringBuffer sb= new StringBuffer("");
		for(int i=0;i<st.length()-1;i++) {
			if(st.charAt(i+1)==st.charAt(i)) {
				continue;
			}
			sb = sb.append(st.charAt(i));
			
		}
		sb.append(st.charAt(st.length()-1));
		System.out.println(sb);
	}
}
