import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class DemoTest {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
//        list.remove(1);
        System.out.println(list);
//        list.reversed();
        Collections.reverse(list);
        System.out.println(list);
        System.out.println(list.size());
        list.add(500);
        list.add(29);

        list.sort(Comparator.naturalOrder());
        System.out.println(list);
    }


}
