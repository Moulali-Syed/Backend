package noop;

public class ECar extends EVehicle{

	int numDoors;
	
	//method overloading
	public void print() {
		System.out.println("Car color"+color+" speed "+speed+" num of Doors "+numDoors);
	}
}
