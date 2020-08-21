# Callback

## Materials and Resources

| Material                                                                                                 |  Time |
| :------------------------------------------------------------------------------------------------------- | ----: |
| [Callback Functions Basics](https://www.youtube.com/watch?v=haz4SBcEYAw)                                 |  5:03 |
| [Understanding JavaScript Callbacks](https://www.youtube.com/watch?v=Nau-iEEgEoM)                        | 15:38 |
| [JavaScript Tutorial For Beginners #42 - JavaScript Timers](https://www.youtube.com/watch?v=Az5J_EkhYCY) | 12:11 |

## Material Review

- What is a callback?
  <!--
  A callback is a function which is passed as an argument to another function.
  -->
- In which scenarios are callbacks useful?
  <!--
  - When you want a piece of code executed after a certain event (e.g. button
    click, timeout, response of a network request arrived)
  - When you want to have a more generic version of a function, e.g. sort,
    filter, where the actual rules are provided as a callback function.
    It's a form of abstraction.
  - Higher-order functions: a function which takes a function as an argument
    and/or returns another function.
    There are several built-in higher-order functions like map, filter, reduce.
  -->
- How to create timers and intervals?
  <!-- use `setTimeout` and `setInterval` -->
- Why is it important to clear intervals?
  <!--
  When you don't need an interval any more it's just a waste of resources,
  and a common form of memory leak.
  It can also introduce strange bugs.
  -->

## Workshop

The good news is that you already used a form of callback when you
implemented button click:

```javascript
function callback() {
  console.log('This is executed once the button is clicked');
};

let button = document.querySelector('button');

button.onclick = callback;
```

You can also create your own function which accepts a callback function:

```javascript
function useCallback(callback) {
  callback('Chewing out a rhythm on my bubble gum');
  callback('The sun is out and I want some');
  callback(
    'It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach'
  );
};

const printSentence = sentence => {
  console.log(sentence);
};

useCallback(printSentence);
```

### More generic functions using callbacks

Image you have an array of numbers and want to get the following ones:

- larger than 2
- negative
- even numbers

You could of course write three separate functions:

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

filterLargerThanTwo(numbers);
filterNegative(numbers);
filterEven(numbers);

function filterLargerThanTwo(numbers) {
  let result = [];

  for(let number of numbers) {
    if(number > 2) {
      result.push(number);
    }
  }

  return result;
}

function filterNegative(numbers) {
  let result = [];

  for(let number of numbers) {
    if(number < 0) {
      result.push(number);
    }
  }

  return result;
}

function filterEven(numbers) {
  let result = [];

  for(let number of numbers) {
    if(number % 2 === 0) {
      result.push(number);
    }
  }

  return result;
}
```

Note that these **functions are almost the same**, the only difference is the
actual condition.

We can create more generic version using callbacks:

```javascript
function filter(numbers, callback) {
  let result = [];

  for(let number of numbers) {
    if(callback(number)) {
      result.push(number);
    }
  }

  return result;
}
```

And just use the same method three times:

```javascript
filter(numbers, n => n > 2);
filter(numbers, n => n < 0);
filter(numbers, n => n % 2 === 0);
```

### Exercises

- [callback-1](callback-1/callback-1.js)

```javascript
setTimeout(() => {
  console.log('apple'); // prints after one second
}, 1000);
console.log('pear'); // prints first
```

```javascript
const timeoutId = setTimeout(() => {
  console.log('Yeeey!'); // not going to run
}, 1000);

clearTimeout(timeoutId);
```

```javascript
const printing = () => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 1000);
  setTimeout(() => {
    console.log(3);
  }, 0);
  console.log(4);
};
printing();

// Output is 1, 4, 3, 2
```

- [Simple Timeout](simple-timeout/simple-timeout.js)
- [Multiple Timeout](multiple-timeout/multiple-timeout.js)
- [Prime squares](prime-squares/README.md)
- [Bomb defuse](bomb-defuse/README.md)
- [Background switcher](background-switcher/README.md)

## Individual Workshop Review

Please follow the styleguide:
[Our JavaScript styleguide](../../styleguide/javascript.md)

- Is the directory structure and the name of the files correct?
- Is every file in strict mode?
- Is the indentation good in each file?
- Is there unnecessary code?
- Can you find unnecessary code in comments?
- Is there unnecessary code duplication?
- Are there unnecessary empty blocks?
- Can you spot unused variables?
