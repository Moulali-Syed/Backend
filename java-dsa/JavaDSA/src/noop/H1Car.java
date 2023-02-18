package noop;

public class H1Car extends H1Vehicle{

	int numDoors;
	
	public H1Car(int numdoors,int speed,String color) {
		super(speed, color);
		this.numDoors = numdoors;
	}
	
	public void print() {
		super.print();
		System.out.println(" numDoors  "+numDoors);
	}
}
