package noop;

public class BVehicleUse {

	public static void main(String[] args) {
		BVehicle v = new BVehicle();
		v.print();//Vehicle  color null maxSpeed 0
		
		BCar c = new BCar();
		c.color = "red";
		c.maxSpeed = 120;
		c.numDoors = 4;
		
		c.print();//Vehicle  color red maxSpeed 120
		
		BBicycle b = new BBicycle();
		b.color = "black";
		b.maxSpeed = 30;
		
		b.print();//Vehicle  color black maxSpeed 30
	}
}
