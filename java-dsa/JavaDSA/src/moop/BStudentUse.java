package moop;

public class BStudentUse {

	public static void main(String[] args) {
		BStudent s1 = new BStudent();
		BStudent s2 = new BStudent();
		
		//s1 and s2 are reference to the object where it is stored
		
		System.out.println(s1);
		
		System.out.println(s1.name);//null
		
		System.out.println(s1.roll_no);//0
		
		s1.name = "Apple";
		s1.roll_no = 1;
		
		s2.name = "Mango";
		s2.roll_no = 2;
		
		System.out.println(s1.name+"   "+s1.roll_no);//Apple   1
		
		System.out.println(s2.name+"   "+s2.roll_no);//Mango   2
	}
}
