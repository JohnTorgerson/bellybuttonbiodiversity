// ID The plot code
console.log("This is the Guage Chart");

var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: 450,
      title: { text: "Speed" },
      type: "indicator",
      mode: "gauge+number",
      delta: { reference: 400 },
      gauge: { axis: { range: [null, 500] } }
    }
  ];
  
  var layout = { width: 600, height: 400 };
  Plotly.newPlot('myDiv', data, layout);