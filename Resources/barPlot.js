// ID The plot code
console.log("This is the Horizontal BarChart");

// Create a Horiz-Bar of the top 10 OTUs in Subject
var data = [
  {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [0, 14, 23],
    type: 'horizontal-bar'
  }
];

Plotly.newPlot('myDiv', data);
