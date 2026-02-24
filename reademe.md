## Answers to Questions

---

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    The Difference are as they are named.

- getElementById: Gets the specific element named as the ID.
- getElementsByClassName: Gets all the elements as they are named as their class name. The main difference is, It collets all the element of the specific name and returns an Array Like Object.
- querySelector: We can get any CSS selector like(ID, Class or any Tag name). But it will only get the first one of similar Class or Tag name.
- querySelectorAll: It is like querySelector, but not for the first one, for all the similar Class or Tag name. Unlike the getElementsByClassName in returns Node List.

### 2. How do you create and insert a new element into the DOM?

- First create an element with document.createElement('tagName')
- Then add text or HTML with - .innerText or .innerHTML
- Then append the created element with .appendChild()

### 3. What is Event Bubbling? And how does it work?

- Event Bubbling is DOM event that triggers on any click on keyboard event to its parent up the way as bubble. For this project i used a fontAwesome button class(fa-trash-can). I used it for bubbling way up to its parent button to way up to the Job Card.

### 4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is a Event handling process where we can set event handler to any parent element get its child element. As in our this project, the All Job card data is from HTML, but the the Interview & Rejected Jobs buttons shows the empty page. Later we added Interview & Rejected Jobs data by clicking the Interview & Rejected button. So that page was empty then rendered, to get that kind of data we used Event Delegation to get its child.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault(): Prevents the default behavior of an event, it used to prevent default behavior on Anchor Tag, Form Submit
- stopPropagation(): It prevents events Bubbling. The events could not go to upwards.
