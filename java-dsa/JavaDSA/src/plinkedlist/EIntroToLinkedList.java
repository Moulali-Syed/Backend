package plinkedlist;
/*
 LinkedList
 
 if we have to store elements in arraylist the elements will be stored 
 in continuous memory location
 
 lets see how we store in a linked list
 
 elements in linked list are scattered , elements are stored anywhere in the memory
 
 linkedlist uses memory address to have connections between all nodes 
 
 every element in linked list will store its value and the address of the next element
 
 @100   	@150      @180       @240 	   @270 
 10 |@150   20|@180   30|@240    40|@270   50|null
 
 the last node of linked list will point to null 
 
 we will store address of first node @100 - and call it as Head 
 last node is called Tail  
 
 
 We must be very consicious with the links in the linkedlist 
 if we break any link , we cannot access the other nodes from there on 
 
 we must always follow make before break principle while working with linkedlist 
 */
public class EIntroToLinkedList {

}
/*
Linked List is suited for size of the structure is constantly changing 
*/