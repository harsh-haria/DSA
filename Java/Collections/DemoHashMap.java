import java.util.HashMap;
import java.util.Map;

public class DemoHashMap {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();

        map.put("One", 1);
        map.put("Two", 2);
        map.put("Three", 3);
        map.put("Four", 4);
        map.put("Five", 5);

        System.out.println("Current map: "+ map);

//        System.out.println(map.get("One"));
        System.out.println("Removing Key Three: " + map.remove("Three"));

        System.out.println("Updated Map after removal of Three: " + map);

        map.putIfAbsent("Five", 55);
        map.putIfAbsent("Six", 6);

        System.out.println("Current map after attempting to add 5 & 6: "+ map);

        System.out.println("\n### Printing all the elements of set ###");
        for(Map.Entry<String, Integer> e: map.entrySet()) {
//            System.out.println(e.getKey());
//            System.out.println(e.getValue());
            System.out.println(e);
        }
        System.out.println("### Done printing! ###\n");

        for(String key: map.keySet()) {
            System.out.print(key + " ");
        }

        for(Integer value: map.values()) {
            System.out.print(value + " ");
        }

        System.out.println("\nDoes map contain 'Five'? " + map.containsKey("Five"));
        System.out.println("Does map contain value '5'? " + map.containsValue(5));
    }
}
