package bprogramminglanguageterminoligiesandfundamentals;
/*
 
 Variables in Java:
 
 Variable is name of memory location
 The variable value van change according to programming language
 Every variable has its own datatype
 
 examples:
 int a =10; //a is variable
 char ch = 'a';//ch is variable
 String name = "Apple";//name is variable
 
 Types of variables:
 1.Local variables
 	Declaration  -  declared inside methods,constructors , blocks
 	Scope  - can be used within methods or constructors or blocks but not outside them
 	Memory Allocation - when the method executes in which we have local variable
 	Memory release - gets deleted when that method or block or constructor execution completes
 	Stored in Memory area - local variables gets memory allocated in STACK  AREA
 	Default values - these donot have any default value, if we donot provide the value
 	for local variables and use them , it will provide an error saying variable_name
 	might not been initialized
 	Access Specifiers - we cannot use access modifiers public,protected,private with local
 						variables
 	How to access local variables - we can use them directly
 	
 2.Instance Variables
  	Declaration  -  declared inside within class but outside methods,constructors,blocks
	Scope - can be used within class and every method or block or constructor but not inside
			static methods or static blocks 
	Memory Allocation - When the object is created instance variables get memory allocated
	Memory release - when object is destroyed instance variables also gets deleted
	Stored in Memory area - Instance variables are stored in Heap area
	Default values - instance variables have default value like int 0 , double - 0.0
	Access Specifiers - we can use access modifiers with instance variables
 	How to access instance variables - we can use them directly , similarly we can
 						access thru object - as objName.var_name
	
 3.Static variables
  	Declaration  -  declared inside class but outside of methods,constructors , blocks
  					and we also use static keyword
  	Scope  - static variables can be called in all methods,static methods
  			blocks,constructors ,static blocks 
  	Memory Allocation - as the .class file gets loaded into JVM, static variables 
  						gets memory allocated
  	Memory release - when .class file gets unloaded from JVM , static variables gets deleted
 	Stored in Memory area - static variables are stored in "METHOD AREA"
 	Default values - instance variables have default value like int 0 , double - 0.0
	Access Specifiers - we can use access modifiers with static variables
 	How to access static variables - we can use them directly or using object or using
 						class name


----------------------------------------------------------------------------------------
 any variable declared inside static method will be local variable only
 
 */
public class DVariablesInJava {

	String name = "Apple";//instance variable
	
	static int n = 10;
	
	void sum() {
		int a;//local variable;
		System.out.println(name);//can use instance variable
		
		System.out.println(n);//can call static variable inside any method
	}
	
	static void divide() {
		System.out.println(n);//can call static variable inside any method
		int n1 = 100;//local variable
		//Cannot make a static reference to the non-static field name
		//System.out.println(name); - as name is instance variable cannot use in static method
	}
	public static void main(String[] args) {
		DVariablesInJava obj = new DVariablesInJava();
		obj.sum();
		divide();
	}
}
