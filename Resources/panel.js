// ID The plot code
console.log("This is the Panel Table");

var values = [
    ['Salaries', 'Office', 'Merchandise', 'Legal', '<b>TOTAL</b>'],
    [1200000, 20000, 80000, 2000, 12120000],
    [1300000, 20000, 70000, 2000, 130902000],
    [1300000, 20000, 120000, 2000, 131222000],
    [1400000, 20000, 90000, 2000, 14102000]]

var data = [{
type: 'table',
header: {
  values: [["<b>EXPENSES</b>"], ["<b>Q1</b>"],
               ["<b>Q2</b>"], ["<b>Q3</b>"], ["<b>Q4</b>"]],
  align: ["left", "center"],
  line: {width: 1, color: '#506784'},
  fill: {color: '#119DFF'},
  font: {family: "Arial", size: 12, color: "white"}
},
cells: {
  values: values,
  align: ["left", "center"],
  line: {color: "#506784", width: 1},
   fill: {color: ['#25FEFD', 'white']},
  font: {family: "Arial", size: 11, color: ["#506784"]}
}
}]

Plotly.newPlot('panel', data);