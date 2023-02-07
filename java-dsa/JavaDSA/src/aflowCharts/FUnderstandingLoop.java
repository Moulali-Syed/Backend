package aflowCharts;
/*
we think of upto when to perform same task
and what can be the next thing to be done
and also we check till when we want to continue
 */
public class FUnderstandingLoop {

	public static void main(String[] args) {
		/*
		for(int i=1;i<=5;i++) {
			System.out.println(i);
		}
		
		int j = 1;
		while(j<=5) {
			System.out.println(j);
			j++;
		}
		*/
		sum();
	}
	
	
	public static void sum() {
		//sum 1 to n
		
		int sum = 0;
		for(int i=1;i<=10;i++) {
			sum+=i;
		}
		System.out.println(sum);
	}
}
