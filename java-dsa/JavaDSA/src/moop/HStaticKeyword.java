package moop;
/*
 static variables are shared by all objects and they belong to class
 
 */
public class HStaticKeyword {
	public static void main(String[] args) {
		Stude s1 = new Stude(1);
		//we can call static variable using object , but preferable to call using class name
		System.out.println(s1.numStudents);
		
		Stude s2 = new Stude(2);
		System.out.println(Stude.numStudents);
	}
}

class Stude{

	final int roll_no;
	static int numStudents;

	//we can have final static variables 
	public static final double CONVERSION_FACTOR  =  0.9;
	public Stude(int roll_no) {
		this.roll_no = roll_no;
		numStudents++;
	}


}