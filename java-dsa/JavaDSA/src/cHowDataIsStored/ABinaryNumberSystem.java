package cHowDataIsStored;
/*
consider binary number system -  it has 0 and 1 

any base N number system will have 0 to N-1 numbers , that is n unique numbers in it
base 10: will have  - 0 - 9


say when i store 
int i = 10;

this is converted into binary and then stored - int has 32 bits

lets see how we can convert a decimal to binary conversion

2 |  10
2 |  5 |0
2 |  2 |1
2 |  1 |0
  |  0 |1 
  
  it is stored as 1010 -  read from bottom top - MSB to LSB
  
----------

this way we can convert any decimal to any base N
just divide with base that is N

N| 10
N| - -
N| - -

-----------
say we have 1234 -  this can be represented as 1*10^3+2*10^2+3*10^1+4*10^0

similarly (10111)base 2 -- 1*2^4+0*2^3+1*2^2+1*2^1+1*2^0 = 16+0+4+2+1 = 23

similarly we can convert any base value - digit*base^pow+digit*base^pow+digit*base^pow+..
 */
public class ABinaryNumberSystem {

	public static void main(String[] args) {
		decimalToBinary(13);
		binaryToDecimal(1101);
	}
	
//	public static String reverse(String s) {
//		String rev = "";
//		for(int i= s.length()-1;i>=0;i--) {
//			rev+=s.charAt(i);
//		}
//		return rev;
//	}
	public static void decimalToBinary(int num) {
	
		String b = "";
		
		while(num>=1) {
			b=num%2+b;
			num = num/2;
		}
		
//		System.out.println(b);
//		String ans = reverse(b);
		System.out.println(b);
	}
	
	public static void binaryToDecimal(int num) {
		int t = num;
		int sum = 0;
		int i = 0;
		while(t>0) {
			int den = t%10;
			t = t/10;
			sum+=den*(Math.pow(2, i++));
		}
		System.out.println(sum);
	}
}
