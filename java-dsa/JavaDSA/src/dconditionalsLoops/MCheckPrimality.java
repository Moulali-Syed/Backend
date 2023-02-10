package dconditionalsLoops;

import java.util.Scanner;

public class MCheckPrimality {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		boolean isPrime = true;
		for(int i=2;i<n/2;i++) {
			if(n%i==0) {
				isPrime = false;
			}
		}
		
		if(isPrime) {
			System.out.println("Prime");
		}else {
			System.out.println("Composite");
		}
	}
	
	//check prime using return
	public static void checkPrime() {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		boolean isPrime = true;
		for(int i=2;i<n/2;i++) {
			if(n%i==0) {
				isPrime = false;
				return;//return exits from main
			}
		}
		
		System.out.println("Prime");
//		if(isPrime) {
//			System.out.println("Prime");
//		}else {
//			System.out.println("Composite");
//		}
	}
}
