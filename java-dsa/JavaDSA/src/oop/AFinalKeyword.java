package oop;
/*
 final keyword:
 
 if make a method final - any other class which inherited (sub class) cannot override this 
 method
 
 -------
 if a class marked as final we cannot inherit the class
 
 --------
 
 */
public class AFinalKeyword {

	public final void print() {
		System.out.println("iam final method which cannot be overridden in sub classes");
	}
}
