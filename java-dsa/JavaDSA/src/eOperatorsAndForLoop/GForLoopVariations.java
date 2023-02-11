package eOperatorsAndForLoop;

public class GForLoopVariations {

	public static void main(String[] args) {
		for(int i=1,j=1;i<=10 && j<=10;i++,j++) {
			System.out.println(i+" "+j);
		}
		
		//nesting is also possible
		for(int i=1;i<=5;i++) {
			for(int j=1;j<=2;j++) {
				System.out.println(i+" "+j);
			}
		}
	}
}
