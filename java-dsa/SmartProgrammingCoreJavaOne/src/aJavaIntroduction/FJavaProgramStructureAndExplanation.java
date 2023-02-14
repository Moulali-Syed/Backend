package aJavaIntroduction;
/*
2.package statement

It is a group of similar type of classes or interfaces or packages 
Advantage of packages:
1.It prevents naming conflicts of classes or interface
2.Easy to maintain 
3.Accessiblity to classes or interfaces can be controlled, security also achieved here
4.Reusability

Types of packages:
1.Pre defined packages  - util ,swing , awt , sql ..etc
2.User defined package - which are created by the developer
syntax :  package package_name;

package statement should be only one in a class 
package statement should be first statement in java file 

java provides one facility for naming convention for package that is
we can create package on the same name of our domain name but in reverse order
for eg: com.google.techdept

This is optional but u should always put all the classes or 
interfaces in any one package
--------------------------------------------------------------------------
3.import statement

import statements are used to make classes or interfaces to be available in
java file which we are going to use them 

syntax:
	import packagename.subpackagename.ClassName;
	import packagename.*;

if we use import packagename.*; only classes or interfaces will be 
imported , not the subpackage

If we donot want to use import statements then we can directly write 
packagename.ClassName to use it 

This is optional to use , but it is used in all major level projects 
this line is written after package line

java.lang is the only package which get imported by default -  ******

--------------------------------------------------------------------------
4.Interface/Class Section - variables and methods

	In this section we create classes or interfaces which contains
	variables, methods , constructors , blocks etc 
--------------------------------------------------------------------------
5.Main Class Section --> main method

	In every java project or java file there should be one main class which should
	contain main() method from which the execution of java program starts 
	
	syntax:
		class Test{
		
			public static void main(String[] args){
			
			
			}
		}



--------------------------------------------------------------------------
Java Program Explanation:

/**
 * this is my first java program
 * Author: Moulali Syed
 * Company: Oracle
 */
/*
 package p1;
 import java.lang.*;

 class Abc{
 
 }
 interface xyz{
 
 }
 
 class Test{
 	public static void main(String[] args){
 		
 	}
 }
 */
public class FJavaProgramStructureAndExplanation {

}
