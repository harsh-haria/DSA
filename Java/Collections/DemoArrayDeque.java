import java.util.ArrayDeque;

public class DemoArrayDeque{
    public static void main(String[] args){
        ArrayDeque<Integer> arrayDeque = new ArrayDeque<>();

        System.out.println("Current Deque: " + arrayDeque);

        arrayDeque.offer(1);
        arrayDeque.offer(2);
        arrayDeque.offer(3);

        System.out.println("Current Deque after 3 offers: " + arrayDeque);

        arrayDeque.offerFirst(4);

        System.out.println("Current Deque after offer first: " + arrayDeque);

        arrayDeque.offerLast(5);

        System.out.println("Current Deque after offer last: " + arrayDeque);

        arrayDeque.poll();
        System.out.println("Current Deque after poll: " + arrayDeque);

        arrayDeque.pollLast();
        System.out.println("Current Deque after pollLast: " + arrayDeque);

        arrayDeque.pollFirst();
        System.out.println("Current Deque after pollFirst: " + arrayDeque);

        System.out.println("Offer last and offer work in the same way.\nPoll and poll last work in the same way");
    }
}