package eOperatorsAndForLoop;

import java.util.Scanner;

/*
Binary to decimal

Given a binary number as an integer N, convert it into decimal and print.
Input format :
An integer N in the Binary Format
Output format :
Corresponding Decimal number (as integer)
Constraints :
0 <= N <= 10^9
Sample Input 1 :
1100 -  0*2^0+0*2^1+1*2^2+1*2^3 =  0+0+4+8 = 12
Sample Output 1 :
12
Sample Input 2 :
111
Sample Output 2 :
7
 */
public class NBinaryToDecimal {

	public static void main(String[] args) {
		Scanner s =new Scanner(System.in);
		int n = s.nextInt();
		int sum = 0;
		int i = 0;
		while(n>0) {
			int lastDigit = n%10;
			
			sum+=(lastDigit*(Math.pow(2,i++)));
			
			n = n/10;
		}
		System.out.println(sum);
	}
}
