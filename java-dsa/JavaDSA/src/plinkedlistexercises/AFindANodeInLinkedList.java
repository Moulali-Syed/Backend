package plinkedlistexercises;
/*
Find a Node in Linked List

You have been given a singly linked list of integers.
 Write a function that returns the index/position of an 
 integer data denoted by 'N' (if it exists). Return -1 otherwise.
Note :
Assume that the Indexing for the singly linked list always starts from 0.
Input format :
The first line contains an Integer 't' which denotes the number
 of test cases or queries to be run. Then the test cases follow.

The first line of each test case or query contains the elements
 of the singly linked list separated by a single space. 

The second line contains the integer value 'N'. It denotes the
 data to be searched in the given singly linked list.
Remember/Consider :
While specifying the list elements for input, -1 indicates the end
 of the singly linked list and hence, would never be a list element.
Output format :
For each test case/query, return the index/position of 'N' in the
 singly linked list. Return -1, otherwise.

Output for every test case will be printed in a separate line.
 Constraints :
1 <= t <= 10^2
0 <= M <= 10^5
Where 'M' is the size of the singly linked list.

Time Limit: 1 sec
Sample Input 1 :
2
3 4 5 2 6 1 9 -1
5
10 20 30 40 50 60 70 -1
6
Sample Output 1 :
2
-1
Sample Input 2 :
1
3 4 5 2 6 1 9 -1
6
Sample Output 2 :
4
 Explanation for Sample Input 2 :
For the given singly linked list, considering the indices 
starting from 0, progressing in a left to right manner
 with a jump of 1, then the N = 6 appears at position 4.
 */
import java.util.Scanner;

public class AFindANodeInLinkedList {

	public static void main(String[] args) {
		Node<Integer> head = takeLLInput();
		
		Node<Integer> temp = head;
		while(temp != null) {
			System.out.print(temp.data+" ");
			temp = temp.next;
		}
		System.out.println();
		int reqIndex = findIndexOfLLElem(head,13);
		System.out.println(reqIndex);
	}
	
	public static int findIndexOfLLElem(Node<Integer> head, int ele) {
		Node<Integer> temp = head;
		int index = 0;
		Integer j = ele;
		while(temp != null) {
			if(temp.data.equals(j)) {
				return index;
			}
			index++;
			temp = temp.next;
		}
		return -1;
	}
	
	public static Node<Integer> takeLLInput(){
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		
		Node<Integer> head = null,tail =null;
		while(n!=-1) {
			Node<Integer> newNode = new Node<>(n);
			
			if(head==null) {
				head = newNode;
				tail = newNode;
			}else {
				tail.next = newNode;
				tail = tail.next;
			}
			n = s.nextInt();
		}
		return head;
	}
}
