import java.util.Set;
import java.util.TreeSet;

public class DemoTreeSet{
    public static void main(String[] args){
        Set<Integer> set = new TreeSet<>();

        set.add(3);
        set.add(2);
        set.add(1);
        set.add(4);

        System.out.println("Elements get sorted while being inserted in the Treeset");
        System.out.println("Current set: " + set);

        set.remove(2);
        System.out.println("Set after removal of 2: " + set);

        System.out.println("Set Size: " + set.size());

        System.out.println("Does set contain 1: " + set.contains(1));

        System.out.println("Is set empty: " + set.isEmpty());

        set.clear();
        System.out.println("Set after clearing it: " + set);

        System.out.println("All the operations in the set are being done in constant time: O(log(n)) ");
    }
}