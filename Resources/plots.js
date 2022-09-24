// ID The plot code
console.log("Gov't Spending Pie Chart Dashboard");

// Create an array of each country's numbers
let australia = Object.values(data.australia);
let brazil = Object.values(data.brazil);
let uk = Object.values(data.uk);
let mexico = Object.values(data.mexico);
let singapore = Object.values(data.singapore);
let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
let labels = Object.keys(data.australia);

// Display the default plot
function init() {
  let data = [{
    values: australia,
    labels: labels,
    type: "bar"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#subjectId").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#subjectId");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'australia') {
      data = australia;
      console.log("Australia Selected");
  }
  else if (dataset == 'brazil') {
      data = brazil;
      console.log("Brazil Selected");
  }
  else if (dataset == 'uk') {
      data = uk;
      console.log("United Kingdom Selected");
  }
  else if (dataset == 'mexico') {
    data = mexico;
    console.log("Mexico Selected");
  }
  else if (dataset == 'singapore') {
      data = singapore;
      console.log("Singapore Selected");
  }
  else if (dataset == 'southAfrica') {
    data = southAfrica;
    console.log("South Africa Selected");
  }
// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();
