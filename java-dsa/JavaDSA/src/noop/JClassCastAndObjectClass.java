package noop;

public class JClassCastAndObjectClass {

	public static void main(String[] args) {
		//we can type cast forcibly else we get compile time error
		
		HVehicle  v = new HCar();
//		HCar c = v;//this gives compile time error - Type mismatch: cannot convert from HVehicle to HCar
		//we can typecast explicitly
		HCar c = (HCar)v; //this will be dangerous as well , if we are typecasting
		//incompatiable class we may get classcast exception
		
		
		
	}
}
/*

Whatever classes we create in java - Object is parent of all the classes
*/