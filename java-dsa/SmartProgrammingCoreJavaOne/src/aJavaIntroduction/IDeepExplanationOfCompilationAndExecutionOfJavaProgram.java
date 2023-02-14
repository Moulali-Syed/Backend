package aJavaIntroduction;
/*
Once we write java program - our .java file is compiled

and creates a .class file that has byte code

this .class file is fed to JVM

JVM has following  3 parts
						JVM(java virtual machine)
	-----------------------------------------------------------
	|	Class Loader										  |
	|														  |
	-----------------------------------------------------------
	-----------------------------------------------------------
	|	Memory area										  	  |
	|											  |
	-----------------------------------------------------------
	-----------------------------------------------------------------------------------
	|	Execution Engine | JavaNativeInterface(JNI) | NML(Native method libraries)		|							  |
	|														  							|
	------------------------------------------------------------------------------------
	
	NML - will be written in some other langauges

----------------------------------------------------------------------------------
What is role of compiler? | What happens in java compilation phase?
it checks syntax is correct or not , java is case sensitive language
java is strongly typed language, so compiler checks that correct values are stored in variables
compiler ignores all comments
compiler converts into byte code
----------------------------------------------------------------------------------

What happens in java execution phase? or What is the role of JVM
 1.Byte code is loaded in JVM
 2.Byte code verifier checks whether the byte code is correct or not
 3.memory allocation starts (variables,methods,class information etc)
 4.Interpreter and JIT Compiler executes our program and provides the output
 
----------------------------------------------------------------------------------

What is virtual machine?
It is a software simulation of a machine which performs operation 
similar to physical machine for eg:calculator , JVM

types of vm:1. hardware/system based vm  and 2.application/process based vm

JVM is application based /process based vm 

What is JVM?
JVM is java virtual machine which helps to execute java byte code , it is application based
or process based vm , we can mention role of JVM 

Architecture of JVM:
Class Loader
	has 3 phases loading , linking , initialization
		loading - read .class file and the information in it is stored in method area
			loading also has 3 ways 
					bootstrap class loader - lib -rt file classes will be loaded
					extension class loader
					application class loader
					
		linking - verify---> Prepare ----> Resolve 
				here byte class file will be checked if everything is correct
				
		intialization - variable initialization with actual value 
		
Memory Areas
	we have 5 typess
	1.method area - has info about .class file and static variables stored here
		when JVM started this is created , only one JVM will have one method area 
		this is not thread safe
	2.heap area
		objects, arrays, instance variables is stored in heap area , this is also not thread safe
	3.stack area
		current runnig methods and the local variables are stored , whenever a new thread
		is created stack area is created ,after its execution it will get deleted
		only one thread can access this , it is thread safe
	4.PC Register-program counter register
		this stores the reference next instruction to be executed , it is thread safe
	5.Native method area
		whatever native methods program needs stored here , it is thread safe
		
Execution Engine:
Interpreter - byte code to machine or native code conversion
JIT compiler - to make our program execution fast, if a method executes morethan a threshold 
				times it will then store and gives it output
garbage collector , security manager	
	
JVM is platform dependent 
 */
public class IDeepExplanationOfCompilationAndExecutionOfJavaProgram {

}
