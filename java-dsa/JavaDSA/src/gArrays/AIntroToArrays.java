package gArrays;

import java.util.Scanner;

/*
Say u have to compare and find largest among 3 

u can find

if among 10 hectic
if among 100 cannot do just by comparing if else 

There comes arrays to the rescue

Arrays store all elements in continuous memory location
array has index start from 0

if array has n elements  - index will be ranging from 0 to n-1


 */
public class AIntroToArrays {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		
		System.out.println("Enter the size of array");
		int size = s.nextInt();
		
		//declaring an array
		int[] arr = new int[size];
		System.out.println("Enter elements in array");
		for(int i=0;i<size;i++) {
			arr[i] = s.nextInt();
		}
		
		System.out.println("Elements in array");
		for(int i=0;i<arr.length;i++) {
			System.out.print(arr[i]+"   ");
		}
	}
}
