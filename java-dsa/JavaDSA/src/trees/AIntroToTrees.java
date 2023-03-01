package trees;
/*
 Till now we have seen many data structures
 We store data in different ways 
 
 array - continuous memory locations
 linkedlist  - each node storing reference to the next node
 
 stack - follows LIFO , underlying data storage will be either in form of
 		  array or in form of linked list , as stack is implemented either of these 
 
 Queue - follows FIFO
 
 array and linkedlist are data structures based on which we can store data in memory
 
 stack and queue are just a layer above these basic data structures which defines
 how data is accessible to user 
 
 -----------------------
 Now lets learn a primary data structure which changes how data is stored in the memory
 
 Tree - 
 
 we have main directory  ---> inside this some are directories and some are files
 							  inturn the directories can have directories inside them
 							  
 lets represent our file structure
 					
 					root
 				/   /   \  	   \
 			 dir1  dir2 file1  dir3
 			 /\	     |		\     \
 		dir4  file2	file3  dir5	  file4
 		
 this is a basic representation of our file system 
 
 -----
 
 			Business Model
 				
 						CEO
 				/     /    \    \
 			CTO     CFO   CBO   CMO
 			/\       /\    /\    /\
 			
 Each of these people again have some hierarchy 
 
 ----
 Each root node will have address of multiple nodes , each of the nodes
 will have address of multiple nodes 
 the nodes which are directly linked to a node , they are children nodes 
 
 we have a parent child relationship in a tree 
 
 A node which does not have any child is LEAF* node 
 everything below the root are descendants for it 
 
 
 root
 parent - child 
 leaf
 descendants
 
 */
public class AIntroToTrees {

}
