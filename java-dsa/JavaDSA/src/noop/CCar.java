package noop;

public class CCar extends CVehicle{

	int numDoors;
	
	public void printCar() {
		System.out.println("Car color "+getColor()+" speed "+speed+" num Doors "+numDoors);
	}
}
