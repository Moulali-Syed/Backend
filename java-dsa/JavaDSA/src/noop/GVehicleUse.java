package noop;

public class GVehicleUse {

	public static void main(String[] args) {
		GCar c = new GCar();
		
		c.color = "red";
		c.speed = 120;
		c.numDoors = 4;
		
		c.print();
	}
}
