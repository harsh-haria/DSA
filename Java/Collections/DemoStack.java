import java.util.Stack;

public class DemoStack {
    public static void main(String[] args) {
        Stack<String> animals = new Stack<>();

        animals.push("Dog");
        animals.push("Cat");
        animals.push("Horse");
        animals.push("Cheetah");
        System.out.println(animals);
        System.out.println("Peeking at the top of the stack: " +  animals.peek()); //returns last element
        System.out.println("Popped element: " + animals.pop());
        System.out.println("Popped element: " + animals.pop());
        System.out.println("Final stack: " + animals);
    }
}