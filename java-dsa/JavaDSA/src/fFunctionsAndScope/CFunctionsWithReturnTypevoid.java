package fFunctionsAndScope;

public class CFunctionsWithReturnTypevoid {


	public static void divide(int numer,int den) {
		if(den==0) {
			System.out.println("Division by zero error");
			return ;
		}
		System.out.println(numer/den);
	}
	public static void main(String[] args) {
		divide(12,3);
	}
}
