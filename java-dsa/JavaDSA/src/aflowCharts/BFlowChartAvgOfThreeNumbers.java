package aflowCharts;

import java.util.Scanner;

/*


Start
read a,b ,c
calculate a+b+c/3
print avg
End
 */
public class BFlowChartAvgOfThreeNumbers {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n1 = s.nextInt();
		int n2 = s.nextInt();
		int n3 = s.nextInt();
		
		int avg = (n1+n2+n3)/3;
		System.out.println(avg);
	}
}
