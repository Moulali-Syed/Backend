package lrecursion;

public class JCheckPalindromeRecursion {

	public static void main(String[] args) {
		System.out.println(checkPalindrome("MADSM",0));
	}
	
	public static boolean checkPalindrome(String st,int stInd) {
		
		if(stInd>=st.length()/2) return true;
		if(st.charAt(stInd)!=st.charAt(st.length()-1-stInd)) {
			return false;
		}
		return checkPalindrome(st,++stInd);
		
		
	}
}
