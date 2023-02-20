package ogenerics;

public class PairGeneric<T> {

	private T first;
	private T second;
	
	public PairGeneric(T first,T second) {
		this.first = first;
		this.second = second;
	}
	
	public T getFirst() {
		return this.first;
	}
	
	public T getSecond() {
		return this.second;

	}
	
	public void setFirst(T fir) {
		this.first = fir;
	}
	
	public void setSecond(T sec) {
		this.second = sec;
	}
	
}
