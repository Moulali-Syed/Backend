package nprotecteddemo;

import noop.CVehicle;

public class ATruck extends CVehicle{

	int maxLoadingCapacity;
	
	public void print() {
		System.out.println("Vehicle color "+getColor()+" maxSpeed "+speed+" maxLoadingCapacity "+maxLoadingCapacity);
	}
	
	public static void main(String[] args) {
		ATruck t = new ATruck();
		t.speed = 120;//speed is declared with protected access modifier - 
		//so we cannot access it outside the class that is inheriting in other package
		t.setColor("red");
		t.maxLoadingCapacity = 100;
		
		t.print();
	}
	
}
