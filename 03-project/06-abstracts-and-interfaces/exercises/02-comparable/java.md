# Comparable

- Check out what is the
  [Comparable interface](https://docs.oracle.com/javase/7/docs/api/java/lang/Comparable.html)
- Get your [Domino class](../../oo/dominoes/)
- Implement the `Comparable` interface on the `Domino`
  - why? we want to compare based on the result of `Domino.compareTo()`
  - more info
    [here](https://stackoverflow.com/questions/18895915/how-to-sort-an-array-of-objects-in-java)
- First compare the first value and then the second

```java
List<Domino> dominoes = new ArrayList<>();
dominoes.add(new Domino(5, 2));
dominoes.add(new Domino(4, 6));
dominoes.add(new Domino(1, 5));
dominoes.add(new Domino(6, 7));
dominoes.add(new Domino(2, 4));
dominoes.add(new Domino(7, 1));

Collections.sort(dominoes);

// the order of your dominoes should look like this: [[1,5], [2,4], [4,6], [5,2], [6,7], [7,1]]
```

- Make your `Todo` class implement `Comparable`
- It should compare the `completed` field first
- Then the `description`
- Or if you haven't got a separate `Todo` class, or it doesn't contain fields
  like `description` and `completed`, use your
  [Thing class](../../oo/fleet-of-things)
