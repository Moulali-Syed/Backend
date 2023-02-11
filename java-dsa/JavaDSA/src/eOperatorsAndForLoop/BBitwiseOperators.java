package eOperatorsAndForLoop;

public class BBitwiseOperators {

	public static void main(String[] args) {
		//bitwise operators
		
		int a =10;
		int b = 2;
		System.out.println(a&b);
		/*
		 1010
		 0010
		 0010 - 2 , so output is 2 
		 */
		
		int p = 10;
		int q = 2;
		System.out.println(p|q);
		/*
		 1010
		 0010
		 1010 - 10 , so output is 10
		 */

		/*
		 ^ - xor 
		 1 0  - 1
		 0 0 -  0
		 0 1 - 1
		 1 1 - 0
		 
		 it means both bits similar then 0 
		 both bits different then 1 
		 */
		
		System.out.println(a^b);//8
		/*
		 * 1010
		 * 0010
		 * 1000 - 8 
		 */
		/*
		 couple of important properties regarding xor 
		 a^a = 0
		 a^0 = a 
		 */
		
		//not operator - ~
		System.out.println(~a);
	}
}
