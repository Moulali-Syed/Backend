package lrecursion;

public class DPrintLinearlyFromNTo1Recursion {

	public static void main(String[] args) {
		int i  = 1;
		printNto1Recursively(i,10);
	}
	
	public static void printNto1Recursively(int i,int range) {
		if(i>range) {
			return;
		}
		i++;
		printNto1Recursively(i,range);
		
		System.out.println(i-1);
	}
}
