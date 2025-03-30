import java.util.ArrayList;

public class DemoArrayList {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);

        System.out.println("base list: " + list);
        list.add(1, 500);
        System.out.println("list with new element at posi 1: " + list);
        System.out.println(list.get(1));
        System.out.println(list.remove(Integer.valueOf(500)));
        System.out.println(list);
        System.out.println("break");
        for(Integer i: list) {
            System.out.println(i);
        }
    }
}