package vhashmaps;
/*
 HashMaps:
 
 say i need to find highest occuring character in a string
 	we can multiple approaches
 			1.sort the string characters , then iterate find each character size
 				nlogn + O(n)
 				
 			2.we can take array , and update array elements based on ascii value of 
 			each character - O(n)
 			
 	what if we want to find maximum possible words from a string?
 	we can have infinte possible words , now i cannot have infinite size array
 	
 	
 	
 	we can use map  -  key and value pairs , we can decide what key and values will be 
 	
 	the operations we want to perform on map
 		insert(k key, v value)
 		getValue(k key)
 		deleteKey(k key)
 		
 		
 If we try implementing maps using linked list
 		to add we can add the end
 		but to find a key , i have to traverse the whole linked list 
 		to delete as well i need to search
 		
 		all these operations will be of time complexity - O(n)
 		
 			
 Better to implement is BST , assume height log(n)
 
 		insertion , deletion , search all have a time complexity of O(logn)
 		
 But we want O(1) , we can do this using HashTable 
 			
 */
public class AIntroToHashMaps {

}
