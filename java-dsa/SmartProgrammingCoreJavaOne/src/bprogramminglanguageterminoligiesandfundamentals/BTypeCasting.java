package bprogramminglanguageterminoligiesandfundamentals;
/*
TypeCasting:

What is ADT(Abstract Datatype)?
ADT is a type or class which holds objects of different types with some specifications

the definition of ADT only mentions what operations are to be performed but not
how these operations are implemented 

for example: Stack ADT, List ADT , Queue ADT etc

-----------------------------------------------------------------------------

Why java is not purely object oriented?
because it has usage of primitive data types 
usage of static members - these belongs to class and not to objects 
these are the reasons for java not being purely object oriented
-----------------------------------------------------------------------------
How primitive variables are passed to methods? pass by value or pass by reference

In java we only have pass by value *****

-----------------------------------------------------------------------------

What is Typecasting?
It is a process using which we can convert one datatype to other datatype 

What are different types of type casting in java?
There are 2 types of type casting in java 
1.primitive datatype type casting
		1.1 Implicit Typecasting or Widening typecasting
		1.2 Explicit Typecasting or Narrowing typecasting
2.user defined datatype type casting 

-----------------------------------------------------------------------------
1.primitive datatype type casting
		1.1 Implicit Typecasting or Widening typecasting
		1.2 Explicit Typecasting or Narrowing typecasting
		
except boolean we can type cast the other 7 primitive datatype 

implicit type casting(Widening ):
	byte ---> short ---> int ----> long ---> float ----> double
						  |
						 char
it is process of converting lower datatype to higher datatype is widening conversion
JVM responsibility is 

explicit type casting(Narrowing):

-----------------------------------------------------------------------------
typechecking - responsibility of compiler (checks for syntax and proper lower datatype is assigned to higher daattype)

typecasting - JVM's responsibility to convert the lower datatype to higher datatype 



-----------------------------------------------------------------------------
when we add two numbers of type

byte,int, short -- result will always be int

when we add two numbers of type
float,double - result will be double

		byte b1 = 10;
		byte b2 = 20;
		int res = b1+b2;
		
		float f1 = 1.2f;
		float f2 = 1.3f;
		float resf = f1+f2;
		
if no1 & no2 are byte, short or int then result will be always in int
if no1 & no2 is long,float , double etc then result will be in higher datatype
-----------------------------------------------------------------------------
Explicit Typecasting or Narrowing typecasting

In this we convert higher data type into smaller data type
		int n1 = 10;
		byte n2 = (byte)n1;//explicit or narrowing type casting achieved by cast operator
-----------------------------------------------------------------------------
		//special case
		int num1= 131;
		byte num2 = (byte)num1;
		System.out.println(num2);//-125 , as the value 131 is beyond byte range
		//it started giving negative values

-----------------------------------------------------------------------------
User Defined DataType Type casting:
it is the process of converting data from one user defined datatype 
to another user defined datatype 

For user defined data type typecasting both must have a relation
either extends or implements 

class Object{

}
class String extends Object{

}
class Test{
	String name = "Apple";
	Object o = (Object)name;

}

-----------------------------------------------------------------------------

 */
public class BTypeCasting {

	public static void main(String[] args) {
		implicitTypeCastingDemo();
		explicitTypeCastingDemo();
		
		byte b1 = 10;
		byte b2 = 20;
		int res = b1+b2;
		
		float f1 = 1.2f;
		float f2 = 1.3f;
		float resf = f1+f2;
	}
	
	public static void implicitTypeCastingDemo() {
		byte b  = 10;
		int a = b;//widening conversion
		
		System.out.println(a);
	}
	
	public static void explicitTypeCastingDemo() {
		/*
		int a  = 10;
		byte b = a;//Type mismatch: cannot convert from int to byte
		
		System.out.println(a);
		*/
		
		int n1 = 10;
		short n2 = (short)n1;//explicit or narrowing type casting achieved by cast operator
		
		//special case
		int num1= 131;
		byte num2 = (byte)num1;
		System.out.println(num2);//-125 , as the value 131 is beyond byte range
		//it started giving negative values
	}
	
}
