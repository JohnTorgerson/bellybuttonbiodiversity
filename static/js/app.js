// Current Work identification
console.log("This is the plot scripts file.");

// This section of code was inspired by Dom's in class tutorial

// Define a constant variable for the data url

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
//========================STUBS============================

// Demographic Table Stub
function demoTable(subjectId) {
    console.log(`Populate Demographics Table(${subjectId})`);

}

// Bar Graph Stub
function drawBar(subjectId) {
    console.log(`Draw Bar Graph(${subjectId})`);

};

// Gauge Dial Stub
function drawGauge(subjectId) {
    console.log(`Draw Gauge Dial(${subjectId})`);

};

// Bubble Graph Stub
function drawBubble(subjectId) {
    console.log(`Draw Bubble Graph(${subjectId})`);
        
};

//=====================END STUBS=========================

// Designate function(s) for the Event Handler - ID Selector Change
function selectId(subjectId) 
{
    console.log(`selectId changed to new Id: ${subjectId}`);
    demoTable(subjectId);
    drawBar(subjectId);
    drawGauge(subjectId);
    drawBubble(subjectId);
}

function initDashboard() 
{
    console.log('InitDashboard()');
    // Get a handle to the dropdown
    let selector = d3.select("#dropdown");

    // let url = "https://getthisfromgitlabhomeworkisntructions.com";

    d3.json(url).then(data => {
        // Put subject id number list into an array
        console.log("Here is the data:", data);

        let subjects = data.names;
        console.log("Here are the subject ids:", subjects);

        // Forloop Populates the Dropdown List
        for (let i = 0; i < subjects.length; i++) {
            let subjectId = subjects[i];
            // console.log(`subjectId = ${subjectId}`);
            selector.append("option").text(subjectId).property("value", subjectId);
        };

        // Read the selected Subject ID from the Dropdown List
        let initId = selector.property("value");

        // Populate the table, gauge, and graphs
        demoTable(initId);
        drawBar(initId);
        drawGauge(initId);
        drawBubble(initId);
    });

};

initDashboard();

// Construct an Initial Load Function


// Change a Load Function Upon a Dropdown Change


// Populate the Demographic Table


// Build a Bar Chart


// Build a Guage


// Build a Bubble Chart

