package eOperatorsAndForLoop;

public class EForLoop {

	public static void main(String[] args) {
		for(int i= 1;i<=10;i++) {
			System.out.println(i);
		}
		/*
		 initialization
		 then check condition
		 then run the loop body
		 then increment/decrement - loop step 
		 */
		
		int j = 1;

		for(;j<=10;j++) {
			System.out.println(j);//if u need j scope outside as well
		}
		
		int k = 1;
		for(;k<=10;) {
			System.out.println(k);
			k++;//this is like converting a for into while
		}
		
		/*
		for(;;) {
			System.out.println(1);//this run infinte times
		}
		System.out.println();//unreachable code
		*/
	}
}
