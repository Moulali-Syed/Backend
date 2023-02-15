package lrecursion;

public class CPrintLinearlyFrom1ToN {

	public static void main(String[] args) {
		int i = 1;
		print1ToNLinearlyRecursive(i,10);
	}
	
	public static void print1ToNLinearlyRecursive(int num,int range) {
		
		System.out.println(num);
		num++;
		if(num>range) {
			return;
		}
		print1ToNLinearlyRecursive(num,range);
	}
}
