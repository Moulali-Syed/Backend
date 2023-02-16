package bprogramminglanguageterminoligiesandfundamentals;
/*
Number System:

Computer can only communicate using numbers 
whatever we write is converted to numbers and understood

The data we provide to computer is converted to number 

In java all characters have unique integer value this is ASCII value

	public static void asciidemo() {
//		for(int i=0;i<=65535;i++) {
//			System.out.println((char)i +" : "+i);
//		}
		
		for(int i=0;i<=300;i++) {
			System.out.println((char)i +" : "+i);
		}
	}
	
computer communicates only in numbers , thus they are 4 number systems
1.Binary Number System(base 2)
2.Octal Number System(base 8)
3.Decimal Number  System(base 10) - by default java supports decimal number system
4.HexaDecimal Number System(base 16)
----------------------------------------------------------------------------------------
Binary Number System - has only 0 and 1
to write in java we can write prefix 0b or 0B
0b or 0B
		System.out.println(0b1111);//15
		
----------------------------------------------------------------------------------------
Octal Number System(base 8)

alphabtes - 0,1,2,3,4,5,6,7

add prefix - 0 to convert it to octal , adding 0 from prefix converts number to octal
******** very important in tech round
		System.out.println(0123);//83
----------------------------------------------------------------------------------------
Decimal Number  System

0-9 , by default java supports this
----------------------------------------------------------------------------------------
HexaDecimal Number System(base 16)

0-9,A, B,C, D,E,F

add prefix 0x or 0X - to convert to hexadecimal value

System.out.println(0x32);//50

----------------------------------------------------------------------------------------
Convert Integer 0b to decimal number 

System.out.println(Integer.parseInt("10",2)); // 10 - is binary number , 2 - is base 

this way we can provide any number as first argument , second argument will be base - 2 0r 8 or 16


		System.out.println(Integer.parseInt("10",2));//2
		
		System.out.println(Integer.parseInt("1110",2));//14
----------------------------------------------------------------------------------------
decimal to binary conversion

2	14
2    7   0
2    3   1
2    1   1
2    0   1

move from bottom to top - mSB to LSB
1110


to convert binary to decimal

1*2^3+1*2^2+1*2^1+0*2^0
----------------------------------------------------------------------------------------
Decimal to binary,octal,hexa decimal conversion

		System.out.println(Integer.toBinaryString(10));//1010
		System.out.println(Integer.toHexString(10));//a
		System.out.println(Integer.toOctalString(10));//12

----------------------------------------------------------------------------------------


 */
public class CNumberSystemInJava {

	public static void main(String[] args) {
		double d = 10.2;//by default decimal is double
		System.out.println(d);
		
		float f = 10.2f;//to mark decimal number as float we need to mention f
		System.out.println(f);
		
//		asciidemo();
		
		System.out.println(0b1111);//15
		
		System.out.println(0123);//83
		
		System.out.println(0x32);//50
		
		System.out.println("------------------------");
		System.out.println(Integer.parseInt("10",2));//2
		
		System.out.println(Integer.parseInt("1110",2));//14
		
		
		System.out.println(Integer.toBinaryString(10));//1010
		System.out.println(Integer.toOctalString(10));//12
		System.out.println(Integer.toHexString(10));//a
		
	}
	
	public static void asciidemo() {
//		for(int i=0;i<=65535;i++) {
//			System.out.println((char)i +" : "+i);
//		}
		
		for(int i=0;i<=300;i++) {
			System.out.println((char)i +" : "+i);
		}
	}
}
