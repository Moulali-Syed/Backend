package bprogramminglanguageterminoligiesandfundamentals;
/*
Token - it is smallest building block or unit of java program that are 
		meaningful to java compiler
		for example: System.out.println("Hello");
		System, . ,out, println , ), (,hello ,; are tokens
		
Our java programs converts into tokens then java compiler converts it to 
java bytecode

different types of tokens:
1. literals
2. operators
3. separators
4. Punctuators
5. Comments
6. Keywords/Reserved Words
7. Identifiers

---------------------------------------------------------------------------------
Literals:
any constant value assigned to variable is a literal
int a = 10; //10 is literal
char ch= 'x'//'x' is literal
String name = "Apple";//"Apple" is literal

types of literals:
1.integral literals(byte,short,int,long)
2.floating point literals(float,double)
3.character literals(single quotes[''], Char literal in integer)
		we can write
			char c1 = 'x';
			char c2 = 100;
			char c3 = -100;//this is not allowed gives error - possible lossy conversion
			//as char can only expect values from 0 to 65535
			char c4 = '\u0061';//unicode representation
			char c5 = '\n';//escape characters
			
4.string literals(String)
5.boolean literals(Boolean)
---------------------------------------------------------------------------------
Operators:
are special symbols used to perform operations on one or more operands

c = a+b ; //+ is operator , a,b are operands 

types of operators:
Arithmetic operators - +,-,*,%,/
unary operators - 
		postfix - no++ , no--
		prefix - ++no , --no, -no , -no, ~no, !no
Assignment operator
	+=, -=, *= ,/= , %= , &= ,^= , |= , <<= , >>= , >>>=
Relational Operators
	== , != ,< , > , <= , >= , instanceof (provides the output in true or false)
Bitwise operators
	binary bitwise operator
		1.bitwise logical operators - bitwise and &, bitwise or |, bitwise exor ^
		2.shift operators
			>>(right shift) , <<(left shift) , >>> (zero fill right shift)
	unary bitwise operator
		one's complement operator
Logical Operators:
 && , ||
 
Ternary operator:
?:


	public static void arthimeticOperators() {
		System.out.println(10+20);//30
		System.out.println(10-20);//-10
		System.out.println(10*20);//200
		System.out.println(10/20);//0 - gives quotient
		System.out.println(10%20);//10 - gives remainder
	}
	
	public static void unaryOperators() {
		int n = 10;
		System.out.println(n++);//10 - first display and then increments
		System.out.println(n);//11
		
		int m = 10;
		System.out.println(++m);//11 - increments first and then prints 
		
		int a = 10;
		System.out.println(a--);//10 first display and then decrements 
		System.out.println(a);//9
		
		int b = 10;
		System.out.println(--b);//9 - decrements first and then displays
		
		int num1 = 10;
		System.out.println(num1+++num1);//21
//		int num2 = 10;
//		System.out.println(++num2+++num2);//this gives error  -Invalid argument to operation ++/--
//		System.out.println(--num2---num2);//Invalid argument to operation ++/--
		int num3 = 10;
		System.out.println(++num3-++num3);//-1 = 11-12
		
		int num4 = 10;
		System.out.println(--num4+--num4);//17
	}
	
	public static void assignmentOperators() {
		int num1 = 10;
		num1+=5;
		System.out.println(num1);//15
	}

	public static void relationalOperators() {
		int n1 = 10;
		int n2 = 20;
		System.out.println(n1==n2);//false
		System.out.println(n1>n2);//false
		System.out.println(n1<n2);//true
		ELiteralsAndOperators ob = new ELiteralsAndOperators();
		//instanceof
		System.out.println(ob instanceof ELiteralsAndOperators);//true
		
		System.out.println(ob instanceof Object);//true - because is Object is parent of all java classes
	}
	
---------------------------------------------------------------------------------
What is instanceof operator?
this is used to verify if the specified object is instance of specified class or interface

//58 minutes

---------------------------------------------------------------------------------




---------------------------------------------------------------------------------



 */
public class ELiteralsAndOperators {

	public static void main(String[] args) {
//		arthimeticOperators();
//		unaryOperators();
//		assignmentOperators();
		relationalOperators();
	}
	public static void relationalOperators() {
		int n1 = 10;
		int n2 = 20;
		System.out.println(n1==n2);//false
		System.out.println(n1>n2);//false
		System.out.println(n1<n2);//true
		ELiteralsAndOperators ob = new ELiteralsAndOperators();
		//instanceof
		System.out.println(ob instanceof ELiteralsAndOperators);//true
		
		System.out.println(ob instanceof Object);//true
	}
	public static void assignmentOperators() {
		int num1 = 10;
		num1+=5;
		System.out.println(num1);//15
	}
	public static void arthimeticOperators() {
		System.out.println(10+20);//30
		System.out.println(10-20);//-10
		System.out.println(10*20);//200
		System.out.println(10/20);//0 - gives quotient
		System.out.println(10%20);//10 - gives remainder
	}
	
	public static void unaryOperators() {
		int n = 10;
		System.out.println(n++);//10 - first display and then increments
		System.out.println(n);//11
		
		int m = 10;
		System.out.println(++m);//11 - increments first and then prints 
		
		int a = 10;
		System.out.println(a--);//10 first display and then decrements 
		System.out.println(a);//9
		
		int b = 10;
		System.out.println(--b);//9 - decrements first and then displays
		
		int num1 = 10;
		System.out.println(num1+++num1);//21
//		int num2 = 10;
//		System.out.println(++num2+++num2);//this gives error  -Invalid argument to operation ++/--
//		System.out.println(--num2---num2);//Invalid argument to operation ++/--
		int num3 = 10;
		System.out.println(++num3-++num3);//-1 = 11-12
		
		int num4 = 10;
		System.out.println(--num4+--num4);//17
	}
}
