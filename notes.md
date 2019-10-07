# Notes

**[Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)** are a way of associating additional data with an element without using hacks.

**[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)**

**CSS Variables** can be updated from JS, unlike pre-processor variables which are compiled.

An **array** has array methods, a nodelist does not.


**[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)**
```JavaScript
fetch(someApi)
  .then(res => res.json())  // convert response blob to JSON
  .then(jsonData => console.log(jsonData)); // do something with data
```
