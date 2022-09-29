// Current Work identification
console.log("This is the plot scripts file.");

// This section of code contains contents inspired by Dom's in class tutorial

// Define a constant variable for the data url
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

//========================STUBS============================

// Populate the Demographic Table
function demoTable(subjectId) {
    // console.log(`Populate Demographics Table(${subjectId})`);

    // d3.json(url).then(data => {
    //     let metaDataSet = data.metadata;
    //     let metaArray = metaDataSet.filter(m => m.id == subjectId);
    //     let metaSubject = metaArray[0];
    //     console.log(metaSubject);

    //     let body = console.log(`id: ${metaSubject.id}`);
    //     // `ethnicity: ${metaSubject.ethnicity}` );
    //     Plotly.text("sample-metadata", body)
    // })
}

// Build a Bar Chart
function drawBar(subjectId) {
    console.log(`Draw Bar Graph(${subjectId})`);

    d3.json(url).then(data => {
        // console.log(data);

        let samplesets = data.samples;
        let sampleArray = samplesets.filter(s => s.id == subjectId);
        let subjectSamples = sampleArray[0];

        let otu_ids = subjectSamples.otu_ids;
        let otu_labels = subjectSamples.otu_labels;
        let sampleValues = subjectSamples.sample_values;
        let topTen_sValues = sampleValues.slice(0, 10).reverse();
        let yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();
        let labels = otu_labels.slice(0, 10).reverse();

        // Create a Bar trace object
        let baData = {
            type: 'bar',
            orientation: 'h',
            x: topTen_sValues,
            y: yticks,
            text: labels
        };

        // Put the trace object into an array
        let baArray = [baData];

        // Create the layout object
        let baLayout = {
            title: "Top Ten Bacteria Cultures Found",
            margin: {t: 95, l: 75}
        };

        // Call Plotly Tool
        Plotly.newPlot("bar", baArray, baLayout);
    });
};

// Build a Guage
function drawGauge(subjectId) 
{
    console.log(`Draw Gauge Dial(${subjectId})`);

    d3.json(url).then(data => {
        // console.log(data);

        let metaDataSet = data.metadata;
        let metaArray = metaDataSet.filter(m => m.id == subjectId);
        let metaSubject = metaArray[0];
        let value = metaSubject.wfreq;

        // Create a gauge trace object
        let gaData = {
            value: value,
            title: { text: "Scrubs per Week" },
            type: "indicator",
            mode: "gauge+number",
            gauge: { axis: { range: [null, 10] } }
        };
        
        let gaArray = [gaData];

        let gaLayout = { 
            height: 400,
            width: 600,
            margin: {b:0, r: -120}
        };

        // Call Plotly Tool
        Plotly.newPlot("gauge", gaArray, gaLayout);
    });
}

// Build a Bubble Chart
function drawBubble(subjectId) {
    console.log(`Draw Bubble Graph(${subjectId})`);
   
    d3.json(url).then(data => {
        // console.log(data);

        let samplesets = data.samples;
        let sampleArray = samplesets.filter(s => s.id == subjectId);
        let subjectSamples = sampleArray[0];

        let otu_ids = subjectSamples.otu_ids;
        let otu_labels = subjectSamples.otu_labels;
        let sample_values = subjectSamples.sample_values;

        // let yticks = otu_ids.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();
        // Create a Bubble trace object
        let buData = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };
        
        // Put the trace int an array
        let buArray = [buData];

        // Create a laytout object
        let buLayout = {
            height: 600,
            width: 1300,
            title: "Bacteria Culture Map Per Subject",
            margin: {t: 50, l: 0},
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        // Call Plotly Tool
        Plotly.newPlot("bubble", buArray, buLayout);
    });
};

//=====================END STUBS=========================

// Update a *NEW* Load Function Upon a Dropdown Selection Change
function selectId(subjectId) 
{
    console.log(`selectId changed to new Id: ${subjectId}`);
    demoTable(subjectId);
    drawBar(subjectId);
    drawGauge(subjectId);
    drawBubble(subjectId);
}

// Construct an Initial Load Function
function initDashboard() 
{
    // console.log('InitDashboard()');
    // Get a handle to the dropdown
    let selector = d3.select("#dropdown");

    d3.json(url).then(data => {
        // Put subject id number list into an array
        console.log("Here is the data:", data);

        let subjects = data.names;
        // console.log("Here are the subject ids:", subjects);

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