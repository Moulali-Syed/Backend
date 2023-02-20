package noop;

public class MFinallyBlock {

	public static void fact(int n) throws LNegativeNumberException {
		if(n<0) {
			throw new LNegativeNumberException();
		}
		int fact = 1;
		for(int i=1;i<=n;i++) {
			fact*=i;
		}
		System.out.println(fact);
	}
	
	public static void main(String[] args) {
		try {
			fact(-3);
			System.out.println("in try");
		} catch (LNegativeNumberException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("in catch");
			
		}finally {
			System.out.println("Executes the finally block always");
		}
		System.out.println("in main");
	}
}
