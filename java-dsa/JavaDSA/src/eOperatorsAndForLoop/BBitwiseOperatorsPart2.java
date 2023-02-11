package eOperatorsAndForLoop;

public class BBitwiseOperatorsPart2 {

	public static void main(String[] args) {
		//we have left shift and right shift operators
		
		//a << 1 - every bit will shift by one bit to left 
		int a   = 10;
		System.out.println(a<<1);//20 -  10*2^1
		//left shift works as multiplying by 2
		
		System.out.println(a<<2);//40 - 10*2^2
		
		System.out.println(a<<3);//80   - 10*2^3
		//left shift effectively works as multiplying the number with 2 
		
		//**** right shift *****//
		System.out.println(a>>1);// 5 -  10/2^1
		System.out.println(a>>2);// 2   - 10/2^2
		System.out.println(a>>3);// 1   -  10/2^3
		System.out.println(a>>4);// 0    - 10/2^4
		//right shift works as halving the value 
		
	}
}
