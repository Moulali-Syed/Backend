package noop;

public class HInheritanceAndConstructors {

	public static void main(String[] args) {
		HCar c = new HCar();
		/*
		 
	calls parent constructor and then child constructor
	
Vehicle's constructor
Car's constructor
		 */
		
		H1Car c1 = new H1Car(4,100,"red");
		c1.print();
	}
}
