package moop;

public class FConstructorDemo {

	public static void main(String[] args) {
		Test obj = new Test();
		/*
inside parameterized constructor
inside non parameterized constructor
		 */
	}
}

class Test{
	int a;
	int b;
	public Test() {
		this(10,20);
		System.out.println("inside non parameterized constructor");
	}
	public Test(int a, int b) {
		this.a = a;
		this.b = b;
		System.out.println("inside parameterized constructor");
	}
	

}
