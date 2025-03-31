import java.util.Comparator;
import java.util.Set;
//import java.util.HashSet;
import java.util.TreeSet;

public class DemoCustomHashSets {
    public static void main(String[] args) {
        Set<Student> students = new TreeSet<>(Comparator.reverseOrder());
        students.add(new Student(5, "Harsh"));
        students.add(new Student(2, "Dog"));
        students.add(new Student(2, "Mike")); // gets ignored because of same roll.
        students.add(new Student(3, "Jack"));

        System.out.println(students);
    }
}