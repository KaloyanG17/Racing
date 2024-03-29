const { NeuralNetwork } = require('brain.js');
const brain = require('brain.js');
const fs = require('fs');

// Read race data from file
fs.readFile('race_data.json', 'utf8', (err, data) => {
   if (err) {
     console.error('Error reading race data file:', err);
     return;
   }

    // Start time for info
   const startTime = new Date();

   // Parse the JSON data 
   const raceDataArray = JSON.parse(data);

   // Data Preprocessing
    const trainingData = [];
    raceDataArray.forEach(raceData => {
        raceData.pitStopInfo.forEach(pitStop => {
            // Skip if no pit stops were made 
            if(pitStop.numOfPits === 0){
                return;
            }
            const inputData = {
               lapsLeft: (parseFloat(raceData.racingLaps) - pitStop.lap)/20,
               tyreUsed: (pitStop.tyre.type === 'Soft' ? 0.1 : (pitStop.tyre.type === 'Medium' ? 0.2 : 0.3)),
               tyreLifeLeft: (parseFloat(pitStop.tyre.lifeLeft)) /100
            };
            // Change the time to get a better result but can lack accuracy
            const timeToBeat = 1360;
            const outputData = { pitstop: parseFloat(raceData.totalTime) > timeToBeat ? 0 : 1 , nextTyreSoft: pitStop.newTyre === 'Soft' ? 1 : 0 , nextTyreMedium: pitStop.newTyre === 'Medium' ? 1 : 0, nextTyreHard: pitStop.newTyre === 'Hard' ? 1 : 0}; // 1 for pitstop, 0 for no pitstop
            trainingData.push({ input: inputData, output: outputData });
        });
    });

   // Neural Network Configuration
    const config = {
        iterations: 10000,
        errorThresh: 0.005,
        learningRate: 0.1,
        hiddenLayers: [6,6],
    };

    // Create a neural network
    const net = new brain.NeuralNetwork(config);

    // Train the network
    net.train(trainingData);

    // Example usage to predict whether to pit or not
    const newData = {
        lapsLeft: 8/20,
        tyreUsed: 0.2,
        tyreLifeLeft: 30/100
    };

    const prediction = net.run(newData);

    const endTime = new Date();
    const duration = endTime - startTime;

    /* NEED TO ADD THESE TO IMPROVE QUALITY AND PERFORMANCE

    net.toJSON();
    net.toFunction();

    */

    // Get the highest predicted next tyre
    if (prediction.nextTyreSoft > prediction.nextTyreMedium && prediction.nextTyreSoft > prediction.nextTyreHard) {
        console.log('Pit for Soft');
    } else if (prediction.nextTyreMedium > prediction.nextTyreSoft && prediction.nextTyreMedium > prediction.nextTyreHard) {
        console.log('Pit for Medium');
    } else if (prediction.nextTyreHard > prediction.nextTyreSoft && prediction.nextTyreHard > prediction.nextTyreMedium) {
        console.log('Pit for Hard');
    }

    // Output prediction and prediction duration
    console.log("Lap Number:", 20 - newData.lapsLeft * 20 , " Tyre Used:", newData.tyreUsed === 0.1 ? 'Soft'  : (newData.tyreUsed === 0.2 ? 'Medium' : 'Hard'), " Tyre Life Left:", newData.tyreLifeLeft * 100);
    console.log("Should pit:", prediction.pitstop > 0.5 ? "Yes" : "No" , ", with confidence:", prediction.pitstop);
    console.log("Soft:", prediction.nextTyreSoft, "Medium:", prediction.nextTyreMedium, "Hard:", prediction.nextTyreHard);
    console.log("Prediction duration:", duration, "milliseconds");

    net.toFunction();

    // Save the trained network
    
    fs.writeFileSync('trained_network.json', JSON.stringify(net.toJSON(), null, 2));
    console.log('Trained network saved to file');

    net.fromJSON(JSON.parse(fs.readFileSync('trained_network.json', 'utf8')));
    console.log('Trained network loaded from file');
});