package cHowDataIsStored;

/*
how negative numbers are stored?

if we have +2 - then it is stored as 0010 

if we have -2 - then it is stored as in its 2's complement form

2's complement  - 1'scomplement+ 1
	0010
1's 1101
+1     1
    1110 [this is -2]
    
    	
 --------
 
 say we have a binary number 1110 , we can convert this to decimal 
 start with 1st bit , it is 1 so negative number
 so find 2's complement of it
 
 1110
 0001
    1
 0010 -- -2
 
  
 say we have 1000
 1000
 0111
    1
 1000 ---  -8
 
 
 ------------------
 if we have 4 bits  we can store   -8 to +7
 N bits 						-2^n-1  to 2^n-1 - 1
 */
public class BHowNegativeNumbersStored {

}
