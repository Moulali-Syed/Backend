package noop;

public class H1Vehicle {

	int speed;
	String color;
	
	public H1Vehicle(int speed,String color) {
		this.speed = speed;
		this.color = color;
		 
	}
	
	public void print() {
		System.out.println("vehicle color "+color+" speed "+speed);
	}
}
