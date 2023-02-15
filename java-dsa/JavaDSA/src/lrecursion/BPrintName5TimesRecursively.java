package lrecursion;

public class BPrintName5TimesRecursively {

	public static void main(String[] args) {
		int count = 0;
		printnameRecursively("Moula Ali",count);
	}
	
	public static void printnameRecursively(String name,int count) {
		
		System.out.println(name);
		count++;
		if(count==5) {
			return;
		}
		printnameRecursively(name,count);
	}
}
