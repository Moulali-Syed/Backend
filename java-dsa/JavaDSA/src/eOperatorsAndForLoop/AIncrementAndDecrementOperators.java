package eOperatorsAndForLoop;
/*
increment - pre and post

decrement - pre and post
 */
public class AIncrementAndDecrementOperators {

	public static void main(String[] args) {
		int a  =10;
		System.out.println(a++);//10 - first it will print the value then it will increment
		System.out.println(a);//11 
		
		int b = 10;
		System.out.println(++b);//11 - first increments and then prints
		
		int c = 10;
		System.out.println(c--);//10 - first print then decrement
		System.out.println(c);//9
		
		int d = 10;
		System.out.println(--d);//9 - first decrement then print
		
		
		int p = 60, q  =80;
		if(p++>60 && q++>80) {
			System.out.println("inside if");
		}else {
			System.out.println("inside else");
		}
		System.out.println("p "+p+" q "+q);//because we are using && - which is short circuting
		//operator , it will not even eqaluate the second condition , if first condition 
		//isequalated to false , so we get 61 and 80 as output
				
		int r = 60 , s = 80;
		if(++r>60 && s++>80) {
			System.out.println("inside if");
		}else {
			System.out.println("inside else");
		}
		System.out.println("r "+r+" s "+s);//61 81
		
		int t=60, u = 80;
		if(++t>60 || u++>80) {
			System.out.println("inside if");
		}else {
			System.out.println("inside else");
		}
		System.out.println("t "+t+" u "+u);//as first condition is getting eqaluated as true
		//it would not check the second condition 
		//so we get output as 61 and 80
	}
}
