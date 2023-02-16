package moop;

public class DDemogettersAndsetters {

	public static void main(String[] args) {
		Employee e1 = new Employee();
		
		e1.setEmpId(10);
		System.out.println(e1.getEmpId());
	}
}

class Employee{
	private int emp_id;
	
	public int getEmpId() {
		return emp_id;
	}
	
	public void setEmpId(int empId) {
		emp_id = empId;
	}
}