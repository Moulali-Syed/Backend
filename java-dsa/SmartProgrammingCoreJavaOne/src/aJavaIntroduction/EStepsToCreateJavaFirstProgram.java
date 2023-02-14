package aJavaIntroduction;
/*
Steps to create java program:

1.Download install jdk, eclipse
2.Create Java Firts program
	2.1 java naming conventions
	2.2 structure of java program
	2.3 java program explanation
3.Compile and Run java program 


--------------------------------------------------------------------------
Java Naming conventions

any name - class, interface, variable, object  ,...
java is case sensitive langugae , declaring uppercase and lowercase name is different


say we have terms  my , java , demo

class/interface -   My    	MyJava				MyJavaDemo 
	
methodName - 	    my()    myJava()			myJavaDemo()


variable name -     my		my_java				my_java_demo
predefinedvarname - MY      MY_JAVA				MY_JAVA_DEMO

package name - 		my      myjava  			myjavademo

--------------------------------------------------------------------------

Structure of java program:
There are mainly 5 sections in java program:
1.Documentation section
2.package statement
3.import statement
4.interface/class section 
	variables & methods
5.main class section 
	main method 
	
--------------------------------------------------------------------------
1.Documentation section
It has basic name of java class - created by name 
date of creation , version , program name ,company name , client name 
description etc

this part is optional 
to create documentation section we use comments

we have single line comments -// 
multi line comments  - /* */
/*
documentation comment - /**   **/
/*
to provide description or meta data of the java program , java
introduced new feature in JDK version 1.5 i.e "Annotation" (@--- )

if we use comments for documentation , these will be removed by compiler
at compilation phase which cannot be read furthur 
so to resolve this problem java introduced annotation 
which cannot be removed at compilation or runtime 

-----
on providing class name with proper package name in command prompt we
can see all the methods inside it

javap java.util.Scanner


--------------------------------------------------------------------------
If we want to provide documentation section in html form , 
then we use  following command in cmd:

javadoc FileName.java 


javap packageName.className(to get the class details)

--------------------------------------------------------------------------



--------------------------------------------------------------------------



--------------------------------------------------------------------------

 */

/**
 * documentation comment syntax
 * @author MOULALI
 *
 */
public class EStepsToCreateJavaFirstProgram {

	public static void main(String[] args) {
		
	}
}
