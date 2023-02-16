package lrecursion;

public class KMultipleRecursionCalls {
//0 1 1 2 3 5 8 13 ......
	public static void main(String[] args) {
		int n = 4;
		System.out.println(fibonaccirecursive(n-2));
	}
	
	public static int fibonaccirecursive(int n) {
		if(n<=1) {
			return 1;
		}
		
		return fibonaccirecursive(n-1)+fibonaccirecursive(n-2);
	}
	
	/*
	 f(2)+f(1)
	 f(2) - f(1)+f(0)
	 f(1) - 1
	 */
}
