// from data.js
var tableData = data;
var tbody = d3.select("tbody");
tbody.html("")
// YOUR CODE HERE!
// Select the Filter button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  tbody.text("")
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // console.log(inputValue);
  // console.log(tableData);
// get the solotion to last class's filter for charting. 
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);
    filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    //console.log(sighting)
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    })
});
