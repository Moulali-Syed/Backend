package bGettingStartedWithJava;

public class GArthimeticOperatorsAndPrecedece {

	public static void main(String[] args) {
		int a   = 10;
		int b = 3;
		int add  =a+b;
		int sub = a-b;
		int mul = a*b;
		int div = a/b;
		int mod = a%b;
		
		System.out.println(add+"  "+sub+"  "+mul+"  "+div+"  "+mod);
		
		double c = 10/3;
		System.out.println(c);//3.0 , because first division will take place then only we get it 
		//assigned to double value 
		
		
		//follows BODMAS rule - left to right 	
		
		int d = b/(2*a);
		System.out.println(d);
	}
}
