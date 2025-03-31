import java.util.PriorityQueue;
import java.util.Queue;

public class DemoMinHeap {
    public static void main(String[] args) {
        Queue<Integer> pq = new PriorityQueue<>();

        pq.offer(50);
        pq.offer(12);
        pq.offer(13);
        pq.offer(14);
        pq.offer(15);

        System.out.println("Min Heap: " + pq);

        System.out.println("Removing element: " + pq.poll());
        System.out.println("Removing element: " + pq.poll());

        System.out.println("Next element in line to be removed: " + pq.peek());
    }
}