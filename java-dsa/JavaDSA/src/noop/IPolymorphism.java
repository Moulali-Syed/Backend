package noop;
/*
polymorhism - many forms 

Every car is a vehicle 
 */
public class IPolymorphism {

	public static void main(String[] args) {
		HVehicle v = new HCar();
		//we can now access only those properties and methods that were common in both
		//this is compile time polymorphism 
		
		//the methods will be called based on the object ***
		//it decides at run timw which method to be called based on object
	}
}
