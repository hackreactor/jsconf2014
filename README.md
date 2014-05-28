## Welcome
We're glad to have you in class! Here's a quick overview of some things you'll want to know as we get started.

#### What's the format of the class?
The class is organized into alternating blocks of lectures and coding exercises that you complete on your own workstation, with the support of our teaching staff.

#### What will I need to do well in the class?
- You should have a good understanding of programming fundamentals, such as loops and control flow, objects and encapsulation, function usage, and classes. The lectures don't linger on the *why* behind such concepts, only the *how* of their usage in JavaScript. **If you are relatively new to these concepts, please tell a TA quickly so we can take extra care in keep you on track during the exercises.**
- You should have a basic/intermediate understanding of writing programs in JavaScript. You're pretty comfortable writing simple browser glue code, maybe even a medium-sized application, but you want to know more of the details of how the language actually works. **If you have no experience at all with JavaScript, but are very comfortable in another language and coding environment, you'll probably be able to keep up. Be sure to complete the 15 minute prep exercises outlined below, so you aren't tripped up getting your code to run in the browser.**
- You'll need a computer of your own to complete the exercises on.
- Some of the instructions are written with the assumption you're using [Google Chrome](www.google.com/chrome/). While you are welcome to use any browser you like, Chrome has some of the best dev tools available, and it's highly recommended you try it for the duration of this class.
- Any plain text editor will suffice for you to edit the exercise files. [Sublime Text](http://www.sublimetext.com/download) is a good choice.

#### What if I finish an exercise with extra time?
If you finish one of the assignments ahead of schedule, your best bet is to research and reinforce any previous concepts you'd felt shakey on, since each lecture is designed to build on a firm understanding of the previous ones. If you need something outside those resources, flag down a TA and they'll help you find a productive exercise for your situation.


---


## Prep work

Before you start the class, you should be familiar with the tools used to produce a working JavaScript program in the browser. This will ensure that we can all move quickly together through the more complicated topics covered throughout the class. Since this course is targeted at intermediate level, you'll only need this if you are entirely new to writing programs in JavaScript for the browser.

In this short introductory assignment, we'll step through the fundamentals of getting JavaScript to execute in a browser, just to make sure you have all the tools necessary to proceed with the rest of the exercieses!

### Requirements

- Read and follow all the instructions found in `workflow/index.html`, uncommenting one section at a time.

### Hint

If you're new to JavaScript syntax, you might find [jsparse](http://jsparse.meteor.com) to be very useful. It will provide you a real-time, visual parse tree of any JS code you type!


---

## Functions

In this section, we'll discuss the nuances of JavaScript's first-order function objects, and how to use them like a pro.

### Requirements

- Open functions/index.html in a web browser to view the failing tests.
- Open functions/exercise.js and work your way through each of the tests. To make a test pass, replace '???' with the value you expect the `ACTUAL` variable to contain.
- Apart from replacing the '???' strings with your expected values, do not edit the code in any other way.
- DO NOT use the chrome dev tools panel to log or view the value of `ACTUAL` in real-time. Instead, try to reason through each test, using your understanding of JavaScript functions to arrive at the correct answer.
- As you update the value of '???' for each test, switch back to the browser and reload functions/index.html to see if you got it right.


---

## OOP

In this main portion of the course, we'll cover the 3 most visible idiosyncrasies of the language: `this`, prototype chains, and class instantiation with `new`. The exercises for all three sections of this module will be driven out of the class pattern project, in the [oop](oop/) folder. In this assignment, we'll adapt a basic stack class from a simple functional instantiation pattern into several other instantiation patterns. These other patterns will, in turn, require an understanding of the keyword `this`, prototype chains, and the keyword `new`. The functional style is completed already in `src/functional/stack.js` to get you started.

---

## Provided groundwork - Functional instantiation

The functional instantiation style is completed already in `src/functional/stack.js` to get you started. It's worth reading this implementation fully so you understand how you could write a class just using functions, rather than involving any of the other, more complicated language features.

### Goal

Read and understand the working code provided in the `stack.js` file, which serves as a working stack class that makes use of the functional instantiation style.

There are no code changes you need to make here, all tests in the functional instantiation column should be passing when you arrive.

### Do
- Look in the `src/functional/` folder.
- Read all functions and properties within the maker function.

### Notice
- There is no use the keyword `new`, the keyword `this`, or any `prototype` chains in this pattern.

### A note about the Stack Functionality Specs
Although you won't be required to implement any of the stack class functionality from scratch, you'll want your adapted versions of the existing stack to pass all the same unit tests as the original code did.
- `push(string)` - Adds a string to the top of the stack
- `pop()` - Removes and returns the string on the top of the stack
- `size()` - Returns the number of items on the stack

---

## The Keyword this

### Exercise A - Functional instantiation with method sharing

The Functional instantiation pattern can make use of shared methods, but doing so requires correct use of the keyword `this`.

### Goal

Make the tests pass in the SpecRunner file that are in the functional-shared column.

### Do
- Work within the `src/functional-shared/` folder.
- Create an object that holds the methods that will be shared by all instances of the class.
- You'll need to use the keyword `this` in your methods.
- (optional) Use [`_.extend`][_.extend] to copy the methods onto the instance.

### Don't
- Use the keyword `new` or `prototype` chains

---

## Prototype chains

### Exercise B - Prototypal instantiation

The prototypal instantiation pattern is very similar to the functional-shared pattern, except that access to the shared methods is achieved by use of a prototype chain, rather than by copying the method references on to a new instance one at a time. This technique entails the use of `Object.create` to create a prototype linkage.

### Goal

Make the tests pass in the SpecRunner file that are in the prototypal column.

### Do
- Work within the `src/protoypal/` folder.
- Use [`Object.create`][Object.create] to create instances of your class

### Don't
- Use the keyword `new`

---

## The Keyword new

### Exercise C - Pseudoclassical instantiation

The prototypal instantiation pattern provides most of the same runtime features as the prototypal pattern, but exposes them via some (rather complicated) alternative syntax. The keyword `new` is the crux of this new syntax, as it allows you to run your functions in the alternate 'construction' mode that the language supports. Learning this pattern also introduces the need to understand the `.prototype` property that exists on every function. (This property relationship should not be confused with the prototype delegation linkage every function and non-function object in the language has).
is very similar to the functional-shared pattern, except that access to the shared methods is achieved by use of a prototype chain, rather than by copying the method references on to a new instance one at a time. This technique entails the use of `Object.create` to create a prototype linkage.

### Goal

Make the tests pass in the SpecRunner file that are in the prototypal column.

### Do
- Work within the `src/pseudoclassical/` folder.
- Capitalize your function name to indicate that it is intended to be run with the keyword `new`
- Use the keyword `new` when instantiating your class
- Use the keyword `this` in your constructor

### Don't
- Declare the instance explicitly
- Return the instance explicitly

---

## OOP Extra credit

Use the [Chrome profiling tools] to compare the performance of each instantiation pattern.
-  Use jsperf.com to create a profiling test case in each of your test suites.  It should instantiate and use a large number of stacks.


---

## Function binding

The keyword `this` has a tendency to become bound to an object we weren't expecting, leading to subtle bugs. One technique for combating this problem is to produce a proxy function that is capable of executing the target function, but always in the same, pre-specified context.

The function that produces these bound proxy functions is called `bind`. In this exercise, you're asked to implement that function from scratch, both as a stand-alone function and as a method of all functions, stored on the function prototype.


### Requirements

- Pass all specs in the [spec file](bind/bindSpec.js) by implementing the bind function in `bind/bind.js`.



<!-- LINKS -->

[Object.create]: http://mdn.io/Object.create
[_.extend]: http://underscorejs.org/#extend
[Chrome profiling tools]: https://developers.google.com/chrome-developer-tools/docs/profiles

