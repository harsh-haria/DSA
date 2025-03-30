import java.util.Queue;
import java.util.LinkedList;

public class DemoQueue {
    public static void main(String[] args) {
        Queue<String> animals = new LinkedList<>();

        animals.offer("Dog");
        animals.offer("Cat");
        animals.offer("Bird");
        animals.offer("Pig");

        System.out.println("Complete list: " + animals);

        System.out.println("Removing first in line element: " + animals.poll());
        System.out.println("Removing Second in line element: " + animals.poll());


        System.out.println("Updated list: " + animals);

        System.out.println("Peeking at the element to be removed next: " + animals.peek());
    }
}