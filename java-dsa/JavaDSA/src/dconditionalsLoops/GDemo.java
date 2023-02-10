package dconditionalsLoops;

public class GDemo {

	public static void main(String[] args) {
		int a = 50;
		int b  = Integer.MIN_VALUE;
		//Exception in thread "main" java.lang.ArithmeticException: / by zero
		if(a/0==b) {
			System.out.println("inside if");
		}else {
			System.out.println("inside else");
		}
	}
}
