// Fetch the race data from the server
fetch("race_data.json").then((response)=>response.json()).then((data)=>{
    // Extract the total times from the data
    const totalTimes = data.map((item)=>item.totalTime);
    // Create the chart
    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.map((item, index)=>`Race ${index + 1}`),
            datasets: [
                {
                    label: "Total Time",
                    data: totalTimes,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

//# sourceMappingURL=training.9bd1d0ab.js.map
