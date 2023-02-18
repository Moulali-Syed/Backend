package noop;

public class GCar extends GVehicle{

	int numDoors;
	//we can use in context to properties as well
	
	int speed;
	public void print() {
		
		//we can call parent class method using super keyword
		super.print();
		System.out.println("Car num Doors "+numDoors);
		
		super.speed = 150;
		System.out.println(speed+"   "+super.speed );
	}
}
