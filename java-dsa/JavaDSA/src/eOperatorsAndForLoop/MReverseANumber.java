package eOperatorsAndForLoop;

import java.util.Scanner;

/*
Reverse of a number

Write a program to generate the reverse of a given number N.
 Print the corresponding reverse number.
Note : If a number has trailing zeros, then its reverse will not include them.
 For e.g., reverse of 10400 will be 401 instead of 00401.


Input format :
Integer N
Output format :
Corresponding reverse number
Constraints:
0 <= N < 10^8
Sample Input 1 :
1234
Sample Output 1 :
4321
Sample Input 2 :
1980
Sample Output 2 :
891
 */
public class MReverseANumber {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		while(n>0) {
			int lastDigit = n%10;
			if(lastDigit != 0 ) {
				System.out.print(lastDigit);
			}
			n = n/10;
		}
		
		revNum();
	}
	
	public static void revNum() {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int revNum = 0;
		while(n>0) {
			int lastDigit = n%10;
			n = n/10;
			revNum = revNum*10+lastDigit;
		}
		System.out.println(revNum);
	}
}
