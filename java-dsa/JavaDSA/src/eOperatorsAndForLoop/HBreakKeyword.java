package eOperatorsAndForLoop;

public class HBreakKeyword {

	public static void main(String[] args) {
		int i = 1;
		while(i<=5) {
			if(i==4) {
				break;
//				System.out.println("e"); - anything after break will not execute 
			}
			System.out.println(i);
			i++;
		}
		System.out.println("Outside while");
		
		//break will break out of the immediate loop 
	}
}
