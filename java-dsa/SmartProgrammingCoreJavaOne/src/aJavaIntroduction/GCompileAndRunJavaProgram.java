package aJavaIntroduction;
/*
we need a main method to run our java program 

lets see how to run java program from cmd

write in cmd
javac and click enter
this will help to know that java path is set in our system or not

we get any message like javac not recoginsed , then we have to set the java path

to set java path we can do it in 2 ways
1.permanent and 2.temporary way path set

copy till bin path - 
set path=C:\ProgramFiles\Java\jdk1.8.0_45\bin

this is temporary path set 

lets see permanent path set

advance system settings - env variables - user variables - Path(variablename) - value(add jdk bin path)
 and also in system variables - set the path - value as jdk bin path
 
 Then open cmd and write javac enter , now our path is set permanently
 
 Now go to directory- which we have saved java program
 compile the java program
 javac fileName.java
 
 this generates a .class file on successful compilation - this checks if syntax is correct
 which is byte code , understandable by computer
 
 Now we can run the java program
 
 java MainClassName
 -----------------------------------------------------------------------------
 
 Cases:
 
 1.say my classname is Abc and file saved as Test
 	compile as  --->  javac Test.java , we get Abc.class file 
 	.class file name will be same as java classname 
 	to run ----------> java Abc
 	
 2.Number of .class files created depends on the number of classes inside a java file 
 	to run -----> run with the classname that has main method, else gives error as main method not found
 	
 	
 3.if i create a public class, then i must save the file with the same class name
 	then only we can compile it 
 	
 4.we cannot create morethan one public class inside a java file
 if no public class then we can save file with any name, if we have public class then
 we must save it as className only
 
  -----------------------------------------------------------------------------

main method cases: different ways to declare main method 

	main():
	public static void main(String[] args) - correct [preferred way]
	static public void main(String[] args) - correct
	public void static main(String[] args) - incorrect because return type
	and method name should be in sequence or syntax
	
	public static void main(String[     ] args) - valid to give spaces 
	public static void main(String args[]) - valid 
	
	public static void main(String xyz[]) - xyz is user defined can be anything - valid
	
	synchronized final public static void main(String args[]) - valid
	
	public static void main(String... args) - we can give varargs - valid 
 
 */
public class GCompileAndRunJavaProgram {

	public static void main(String[] args) {
		System.out.println("Hello Moulali");
	}
}
