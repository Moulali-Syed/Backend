package oop;

public class BVehicleuse {

	public static void main(String[] args) {
		BVehicle v = new BCar();
		boolean res1 = v.isMotorized();
		System.out.println(res1);
		
		BCar v2 = new BCar();
		boolean res2  = v2.isMotorized();
		System.out.println(res2);
	}
}

