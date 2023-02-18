package noop;

public class CVehicleUse {

	public static void main(String[] args) {
		CVehicle v = new CVehicle();
		v.print();
		
		CCar c = new CCar();
		c.numDoors = 4;
		c.speed = 120;
		c.setColor("RED");
		c.printCar();
		
		CBicycle b = new CBicycle();
		b.setColor("Black");
		b.speed = 30;
		b.print();
	}

}
