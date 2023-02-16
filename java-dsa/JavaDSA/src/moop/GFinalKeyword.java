package moop;
/*
 I want to give value only once - and not change further
 then i can mark it as final 
 
 thus no further changes are allowed
 
 1. we have to intialize the final variable at time of creation
 or
 2. we can initialize the final variable in the constructor - so that we can change it 
 for each object invocation
 
 */
public class GFinalKeyword {

}

class Stud{
	final double conversionFactor = 0.97;
	final int roll_no;
	
	public Stud(int roll_no){
		this.roll_no = roll_no;
	}
}