package noop;

public class KExceptionHandling {

	public static void main(String[] args) throws KDivideByZeroException {
		//Exception disrupts normal code flow
		
//		System.out.println(4/0);
		
		
		/*
		 Exceptions:3 types 
		 errors - this occurs due to hardware failure
		 unchecked exception - these occur due to logical errors
		 checked exception - 
		 */
		
		divide(10,0);//Exception in thread "main" java.lang.ArithmeticException
		
		divide1(12,0);//now main should either resolve or pass it to parent Exception
		//that is using throws
		
		//if main wants to handle exception then we use try catch block
		//then no need of throws keyword with main function
		try {
			divide1(1,0);
		}catch(KDivideByZeroException e) {
//			e.printStackTrace();
			System.out.println("Divide by zero exception occurs ");
		}
	}
	
	public static int divide(int n1,int n2) {
		if(n2==0) {
			throw new ArithmeticException();
		}
		return n1/n2;
	}
	
	public static int divide1(int n1,int n2) throws KDivideByZeroException{
		if(n2==0) {
			//when we write below step -we get compilation error
			//we can either tell what to do when this exception happens
			//or we can pass this exception to who so ever called 
			throw new KDivideByZeroException();
		}
		return n1/n2;
	}
}
/*
 We can create exception and throw that 
 
 1.create a class name it - KDivideByZeroException
 2.change its parent class to  Exception , thus it will create  class which extends Exception class
 */
