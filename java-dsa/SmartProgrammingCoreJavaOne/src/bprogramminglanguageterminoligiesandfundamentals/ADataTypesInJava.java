package bprogramminglanguageterminoligiesandfundamentals;
/*
DataTypes in Java:

Programming language fundamentals and terminlogies:

datatypes
variables
tokens
	->literals
	->operatos
	->seperators
	->punctuations
	->comments
	->keywords/reserved words
	->identifiers
	
	
----------------------------------------------------------------------------
DataTypes:
10, a , apple  - all these are data
if we are specifying of what type data is datatype - number,character, string

the type of data we are specifying to java is known as datatype
for example: 10 int , apple string , 'a' - character , true - boolean

depending on datatypes langauges are divided into 2 types:
1.Statically Typed Language
2.Dynamically Typed language

the languages in which we need to specify the datatype of the data  are statically typed
thus compiler knows the type of data we are providing
ex:java , C, C++ , FORTRAN , PASCAL ...etc 
the languages in which we need not specify datatype are dynamically typed
ex:python , javascript , ruby , Objective C ...etc

----------------------------------------------------------------------------

Types of datatypes:

1.Primitive datatypes (predefined datatype):
The datatypes which are already provided by java and whose size are fixed  are known as 
primitive datatype
examples: there are 8 primitive datatypes - byte,short,int,float, long,double,boolean,char

size of each datatype:
1byte - 8 bits

boolean - not defined depends on the machine we are executing
byte   - 1byte  - 0
short  - 2 bytes - 0
int    - 4 bytes  - 0
long   - 8 bytes  - 0

float  - 4bytes  - 0.0 
double - 8bytes  - 0.0

char  -  2bytes  -  '\u0000'
2.Non-Primitive datatypes(User Defined Datatypes or Derived Datatypes):
Non-primitive datatypes are not predefined datatypes but are created by programmer
These are sometimes known as "reference variable " or "object reference"
size is not fixed
ex:String , Array, Collection,Class, Abstract Class, Interface etc

initial value of non primitive value is - null *****
----------------------------------------------------------------------------
What are Wrapper Classes?

these are classes which converts primitives to Objects and also can convert Objects into
Primitives -  these are called wrapper classes

there are 8 wrapper classes 

boolean - Boolean
int - Integer
long - Long
char - Character 
float - Float
short - Short
byte - Byte
double - Double



----------------------------------------------------------------------------
What is Auto Boxing and  Unboxing
in J2SE version 5.0 , java introduced auto boxing and unboxing

this automatically converts primitive to objects and also objects to primitives 
this feature is called auto boxing and unboxing


Auto Boxing - this will automatically convert 
				primitive datatypes to corresponding wrapper classes by java compiler 
Unboxing - automatic conversion of an object of wrapper type to its corresponding
			primitive value by java compiler 
			
see below demos in methods
autoBoxingDemo()
unboxingDemo()
----------------------------------------------------------------------------

range:

we get using 

MIN_VALUE

MAX_VALUE


----------------------------------------------------------------------------





----------------------------------------------------------------------------


 */
public class ADataTypesInJava {

	public static void main(String[] args) {
		autoBoxingDemo();
		unboxingDemo();
		
		System.out.println(Integer.MIN_VALUE);
		System.out.println(Integer.MAX_VALUE);
		
		System.out.println("Byte"+ Byte.MIN_VALUE);
		System.out.println("Byte"+ Byte.MAX_VALUE);
		
		System.out.println("Short"+ Short.MIN_VALUE);
		System.out.println("Short"+ Short.MAX_VALUE);
		
		System.out.println("Long"+ Long.MIN_VALUE);
		System.out.println("Long"+ Long.MAX_VALUE);
		
		System.out.println("float"+ Float.MIN_VALUE);
		System.out.println("float"+ Float.MAX_VALUE);
		
		System.out.println("double"+ Double.MIN_VALUE);
		System.out.println("double"+ Double.MAX_VALUE);
		
		System.out.println("char"+ Character.MIN_VALUE);
		System.out.println("char"+ Character.MAX_VALUE);
		
	}
	
	public static void autoBoxingDemo() {
		int a = 10;
		//The constructor Integer(int) has been deprecated since version 9 and marked for removal
		Integer i = new Integer(a);//explicitly
		
		
		//below is the autoboxing syntax *****
		Integer j = a;//new way of doing from java 9 - Integer.valueOf(a)
		
		System.out.println(i);
		System.out.println(a);
		
		System.out.println(j);
	}
	
	public static void unboxingDemo() {
		//object to primitive explicitly
		Integer i = new Integer(10);
		int a = i.intValue();
		
		//auto unboxing
		int b = i;
		System.out.println(i);
		System.out.println(a);
		System.out.println(b);
	}
}
