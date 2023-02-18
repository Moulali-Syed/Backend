package noop;

public class EVehicleUse {

	public static void main(String[] args) {
		ECar c = new ECar();
		c.color = "red";
		c.speed = 120;
		c.numDoors = 4;
		//method overloading
		c.print();//Car colorred speed 120 num of Doors 4
	}
}
