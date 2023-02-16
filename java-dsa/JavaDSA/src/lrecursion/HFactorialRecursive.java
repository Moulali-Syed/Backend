package lrecursion;

public class HFactorialRecursive {

	public static void main(String[] args) {
//		factorialParams(5,1);
		System.out.println(factorialFunc(5));
	}
	
	//parameterized method
	public static void factorialParams(int n,int fact) {
		if(n==1) {
			System.out.println(fact);
			return;
		}
		factorialParams(n-1,fact*n);
	}
	
	//functional way
	public static int factorialFunc(int n) {
		if(n==1) {
			return 1;
		}
		return n*factorialFunc(n-1);
	}
}
