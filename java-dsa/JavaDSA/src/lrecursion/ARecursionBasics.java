package lrecursion;
/*
What is Recursion?

When a function calls itself , until a specified condition is met

If we do not specify the condition then we get StackOverflow error
 */
public class ARecursionBasics {

	public static void main(String[] args) {
		int i = 1;
		print(i);
	}
	
	public static void print(int num) {
		
		//mention the condition where to break - base condition
		if(num==6) {
			return;
		}
		System.out.println(num);
		num++;
		//call the function 
		print(num);
		
	}
	/*
	 In the above function iam printing 1 to 5 recursivley
	 i printed 1 and then incremented i by 1 
	 again i called the same function
	 
	 this will repeat till it hits the base condition - where i need to stop these
	 recursive calls
	 it is very important to mention base condition else it will lead
	 to stackoverflow error 
	 */
	/*
5
4
3
2
1
	 */
	
	
}
