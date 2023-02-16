package moop;
/*
 for classes we have a default constructor
 */
public class FConstructors {

	//default constructor - name should be same as class name 
	//no need of return type
	public FConstructors() {
		
	}
	
	//we also have parameterized constructor
	public FConstructors(int a,int b) {
		
	}
	
	public static void main(String[] args) {
		
		//constructor call depends on the parameters we are passing
		Emp e1 = new Emp(1,"Apple");
		System.out.println(e1.empId+" "+e1.name);
	}
}

class Emp{
	int empId;
	String name;
	
	//non parameterized constructor
	public Emp() {
		
	}
	
	//parameterized constructor
	public Emp(int empId,String name) {
		this.empId = empId;
		this.name = name;
	}
	
	//if we think passing name is fine then create a constructor 
	public Emp(String name) {
		this.name = name;
	}
}
