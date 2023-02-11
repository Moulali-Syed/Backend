package fFunctionsAndScope;

import java.util.Scanner;

public class ANcR {

	public static void main(String[] args) {
		//calculate nCr
		/*
		n!/(n-r!)*(r!)
		 */
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int r = s.nextInt();
		System.out.println(nCr(n,r));
	}
	
	public static int nCr(int n ,int r) {
		int nFact = fact(n);
		int nMinusRFact = fact(n-r);
		int rFact = fact(r);
		
		int ncr = nFact/(nMinusRFact*rFact);
		return ncr;
	}
	
	public static int fact(int num) {
		//num -5 === 5*4*3*2*1
		int fact = 1;
		for(int i=num;i>0;i--) {
			fact*=i;
		}
		return fact;
	}
}
