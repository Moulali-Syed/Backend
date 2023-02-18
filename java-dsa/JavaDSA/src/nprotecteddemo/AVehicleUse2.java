package nprotecteddemo;

import noop.CVehicle;

public class AVehicleUse2 {

	public static void main(String[] args) {
		ATruck t = new ATruck();
//		t.speed = 100;//speed is declared with protected access modifier - 
		//so we cannot access it outside the class that is inheriting in other package
	}
}
