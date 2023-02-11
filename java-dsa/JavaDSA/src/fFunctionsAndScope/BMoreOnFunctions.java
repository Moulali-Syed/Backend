package fFunctionsAndScope;


public class BMoreOnFunctions {

	public static void main(String[] args) {
		System.out.println(addnums(12,12));
		printEven(100);
	}
	
	public static void printEven(int n) {
		for(int i=1;i<=n;i++) {
			if(i%2==0) {
				System.out.print(i+"  ");
			}
		}
		System.out.println();
	}
	public static int addnums(int n1, int n2) {
		return n1+n2;
	}
}
