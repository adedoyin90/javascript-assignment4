// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the button element
    const fetchDataButton = document.getElementById('fetchDataButton');

    // Attach event listener to the button
    fetchDataButton.addEventListener('click', fetchData);

    // Function to fetch data from the Express server
    async function fetchData() {
        try {
            // Make a fetch request to the server
            const response = await fetch('/api/destinations');

            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the JSON data from the response
            const jsonData = await response.json();

            // Process the fetched JSON data here
            console.log(jsonData);
            
            // Display the data on the HTML page
            displayData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Function to display fetched data on the HTML page
function displayData(data) {
    // Get a reference to the result <div> element
    const resultDiv = document.getElementById('result');

    // Clear any existing content inside the result <div>
    resultDiv.innerHTML = '';

    // Create a <pre> element to display the formatted JSON data
    const preElement = document.createElement('pre');

    // Convert the data object to a formatted JSON string
    const jsonString = JSON.stringify(data, null, 2);

    // Create a text node with the JSON string
    const jsonTextNode = document.createTextNode(jsonString);

    // Append the text node to the <pre> element
    preElement.appendChild(jsonTextNode);

    // Append the <pre> element to the result <div>
    resultDiv.appendChild(preElement);
}

});
