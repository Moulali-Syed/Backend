package jTwodimensionalarrays;

public class DHow2DArraysStored {

	public static void main(String[] args) {
		//2d array can be declared as
		int[][] arr2d = {{1,2,3},{3,4,5},{7,8,9}};
		//all rows are separate 1d arrays in a 2d array
		
		/*
		 arr2d is a reference of an array , in which each element is a reference of 1d array
		 
		 say arr2d is 3*3 array
		 
		 arr2d has reference to an address say 600 
		  	which has references of each 1d array 
		  	arr2d --  [300,400,500]
		  	this 300,400,500 are reference to 1d array each 
		 */
		
		System.out.println(arr2d);//[[I@515f550a  -  2d array reference
		System.out.println(arr2d[0]);//[I@cac736f - 1d array reference
		System.out.println(arr2d[1]);//[I@5e265ba4 - 1d array reference
		System.out.println(arr2d[2]);//[I@156643d4 - 1d array reference
		
		System.out.println(arr2d.length);//to get number of rows in a 2d array
		System.out.println(arr2d[0].length);//number of columns in a particular row

	}
}
