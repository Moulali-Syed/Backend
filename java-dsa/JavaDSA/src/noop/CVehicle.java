package noop;

public class CVehicle {

	private String color;
	protected int speed;
	
	//to access private variables we need to create getters and setters
	
	public void setColor(String color) {
		this.color = color;
	}
	
	public String getColor() {
		return this.color;
	}
	
	public void print() {
		System.out.println("Vehicle color "+color+" speed "+speed);
	}
}
