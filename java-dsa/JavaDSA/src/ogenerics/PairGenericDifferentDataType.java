package ogenerics;

public class PairGenericDifferentDataType<T,V> {

	private T first;
	private V second;
	
	public PairGenericDifferentDataType(T first,V second) {
		this.first = first;
		this.second = second;
	}
	
	public T getFirst() {
		return this.first;
	}
	
	public V getSecond() {
		return this.second;

	}
	
	public void setFirst(T fir) {
		this.first = fir;
	}
	
	public void setSecond(V sec) {
		this.second = sec;
	}
	
}
