package vhashmaps;
/*
 Lets implement HashMap using HashTable
 
 //
 lets consider that we need to store key value pair 
 and i also need fast access to them either search insert delete
 
 up till now we have only one data structure that can do this fast
 that is array 
 
 now lets consider array(say it a bucket array) and at each index position lets say i store key
 and value in it
 
 For this our key will go thru a hash function which gives us an integer
 then we store the key in that index of array
 using that same integer value , i got from hash function i can get the key value in array
 
 
 lets understand Hash Function
 this has --> hash code and a compression function 
 hash function gives a number , we make this number go thru compression function
 and we get the a value in index range of our bucket array 
 
 
 -------
 
 we have a key --> that goes thru the hash function ---> which gives us an integer
 and based on this we store in our bucket array at that index position(integer will be 
 in between 0 to bucketArray.length - 1
 */
public class DBucketArrayAndHashFunction {

}
