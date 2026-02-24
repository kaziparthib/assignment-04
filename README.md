# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is
getElementById grab a specific html element that has a id with unique name

get ElementsByClassName grabs HTML elements that has class with same name

querrySlector can target elements by id,class,tagname it gives the first element that match the specific selector

querrySelectorAll returns a nodelist  (a group of elements)    that match the selector.

# How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM using JavaScript First creat the element using the document.createElement() , specifying the tag name . After creating  the elements is in a "blank slate," so customize it by text adding CSS classes through classList.add().

 Use appendChild() to place it in parentNode.
 
 # What is Event Bubbling? And how does it work
Event bubbling is when an event, like a click, starts at the specific element someone touched and then bubbles up through all its parent elements. This means if someone click a button inside a box, the browser thinks they clicked both the button and the box itself. 

# What is Event Delegation in JavaScript? Why is it useful?
Event delegation is when someone put a single listener on a parent element to handle clicks for all its children at once.
It’s  useful because it saves memory and still works perfectly  while adding new items to the list .

#  What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the browser's default behavior while stopPropagation() stops the event from "bubbling" up to parent elements.
