package fFunctionsAndScope;
/*
Fibonacci Number

Given a number N, figure out if it is a member of fibonacci series or not.
 Return true if the number is member of fibonacci series else false.
Fibonacci Series is defined by the recurrence
    F(n) = F(n-1) + F(n-2)
where F(0) = 0 and F(1) = 1


Input Format :
Integer N
Output Format :
true or false
Constraints :
0 <= n <= 10^4
Sample Input 1 :
5
Sample Output 1 :
true
Sample Input 2 :
14
Sample Output 2 :
false    
 */
public class EFibonacciNumber {

	public static void main(String[] args) {
		System.out.println(checkNumIsFib(5));
	}
	
	public static boolean checkNumIsFib(int n) {
		int a = 0;
		int b = 1;
		boolean isFib = false;
		for(int i=2;i<=n;i++) {
			int c = a+b;
			a = b;
			b = c;
			if(c == n) {
				isFib = true;
				return isFib;
			}
			
		}
		return isFib;
	}
}

//Everything in java is pass by value
