package moop;

public class IStaticFunctions {

	public static void main(String[] args) {
		Studen s1 = new Studen(1);
		
		//outside class we are able to access the static varibale and change
		//we must restrict this 
//		s1.numStudents = 100;
		
		Studen.getNumStudents();
		
	}
}
class Studen{
	
	final int roll_no;
//	static int numStudents;
	
	//to restrict use 
	private static int numStudents;
	
	//but i want people to read it
	public static int getNumStudents() {
		//we cannot access non static variables inside static functions
		return numStudents;
	}
	//we can have final static variables 
	public static final double CONVERSION_FACTOR  =  0.9;
	public Studen(int roll_no) {
		this.roll_no = roll_no;
		numStudents++;
	}
	
	
}