package noop;

public class LExceptionHanding2 {


	public static void factorial(int n) throws LNegativeNumberException {
		if(n<0) {
			throw new LNegativeNumberException();
		}
		int fact = 1;
		for(int i=n;i<=2;i--) {
			fact*=i;
		}
	}
	public static void main(String[] args) {
		try {
			factorial(2);
		} catch (LNegativeNumberException e) {
			
//			e.printStackTrace();
			System.out.println("Negative Number Exception");
		}catch(Exception e) {
			System.out.println("Generic Exception");
		}
	}
}
