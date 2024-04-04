// script.js
document.addEventListener('DOMContentLoaded', () => {
    const fetchDataBtn = document.getElementById('fetchDataButton');
    const destinationList = document.getElementById('destinationList');

    fetchDataBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/destinations');
            const data = await response.json();

            // Format and display JSON data
            destinationList.innerHTML = data.destinations.map(destination => `
            
            <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
            <tr>
              <td><h2>${destination.id}</h2></td>
              <td><h3>${destination.name}</h3></td>
              <td><p>${destination.description}</p></td>
            </tr>
          </table>
          
          
      
          
            `).join('');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
});
