package vhashmaps;
/*
 we have a key --> that goes thru the hash function ---> which gives us an integer
 and based on this we store in our bucket array at that index position(integer will be 
 in between 0 to bucketArray.length - 1
 
 
 ------
 
 Now say two keys wanted to go to same array position inside the bucket array 
 
 we can tackle this in 2 ways
 	1.closed hashing/addressing - this means at one index position we have to allow
 								  more than one entry , then we specify each entry
 								  of array as linked list , then we can store multiple keys
 								  (this is also called separate chaining)
 	2.open hashing/addressing - if a key wants to go to a particular index position
 								if it is empty , fill it the key over that index
 								if filled ,check for an alternative where we can store it 
 								
 Lets see implementation using separate chaining
 */
public class ECollisionHandling {

}
