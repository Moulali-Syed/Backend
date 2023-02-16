package moop;
// this - is reference to current object
public class EthisKeyWord {

	public static void main(String[] args) {
		Student s = new Student();
		s.setRollNo(10);
		System.out.println(s.getRollNo());
	}
}

class Student{
	
	private int roll_no;
	
	public int getRollNo() {
		return this.roll_no;
	}
	
	public void setRollNo(int roll_no) {
		//this - is reference to current object
		this.roll_no = roll_no;
	}
}
