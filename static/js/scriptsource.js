// filter()**********************************
// An array of objects, representing a cartoon family
var simpsons = [{
    name: "Homer",
    age: 45
  }, {
    name: "Lisa",
    age: 8
  }, {
    name: "Marge",
    age: 43
  }, {
    name: "Bart",
    age: 10
  }, {
    name: "Maggie",
    age: 1
  }];
  
  // Create a custom filtering function
  function selectYounger(person) {
    return person.age > 30;
  }
  
  // filter() uses the custom function as its argument
  var youngSimpsons = simpsons.filter(selectYounger);
  
  // Test
  console.log(youngSimpsons);

  // *************************************************

  // Select the submit button  pressing button after entry.
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
});
 // ************************************************
