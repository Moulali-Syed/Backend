package dconditionalsLoops;

public class OScopeOfVariables {

	int a = 10;
	public static void main(String[] args) {
		//we cannot have duplicate variable names within same scope
		
		int a = 10;
		
		if(a>10) {
//			int a = 20;//complie time error- duplicate local varibale
			System.out.println(a);
			
			int c = 100;
		}else {
			int b = 10;
			System.out.println(b);
			int c = 200;
		}
		
//		System.out.println(b);//cannot access  b here
	}
}
