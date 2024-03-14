fetch('config.json')

    .then(response => response.json())

    .then(data => {

        console.log(data.bus_api_url);

    })

    .catch(error => console.error('Error fetching data:', error));
