// ID this page
console.log('This Is For Testing Plot Samples');

// Instructions
console.log('Toggle by commenting out between BAR, GAUGE, & BUBBLE, and if you want to test variables from index.html, do not call it Shirley.');


// ==========BAR==========================

// var data = [{
//   type: 'bar',
//   x: [117, 124, 161], // Replace with Variable
//   y: ['OTU 482', 'OTU 2859', 'OTU 1167'], // Replace with Variable
//   orientation: 'h'
// }];

// Plotly.newPlot('shirley', data);

// ==========GAUGE========================

// var data = [
//   {
//     value: 2,
//     title: { text: "Scrubs per Week" },
//     type: "indicator",
//     mode: "gauge+number",
//     gauge: { axis: { range: [null, 10] } }
//   }
// ];

// var layout = { width: 600, height: 400 };

// Plotly.newPlot('shirley', data, layout);

// ==========BUBBLE=======================


// var trace1 = {
//   x: [1111, 1250, 2512, 1899], // set varible to OTU ids
//   y: [126, 87, 49, 28], // set variable for OTU results
//   text: ['Oh, a bubble', 'An orange bubble', 'and a green one', 'baby pink bubble'], // Set variable for OTU Anmes
//   mode: 'markers',
//   marker: {
//     color: [1111, 1250, 2512, 1899, 3000], // set variable same as "X"
//     colorscale: 'Earth',
//     // type: 'heatmap',
//     // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//     // opacity: [1, 0.8, 0.6, 0.4],
//     size: [126, 87, 49, 28] // set variable same as "Y"
//   }
// };

// var data = [trace1];

// var layout = {
//   xaxis: {
//     title: {
//       text: "OTU ID",
//     }
//   },
//   showlegend: false,
//   height: 500,
//   width: 1100
// };

// Plotly.newPlot('shirley', data, layout);
